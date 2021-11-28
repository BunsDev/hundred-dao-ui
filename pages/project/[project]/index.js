import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Typography, Paper, Button } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import Layout from '../../../components/layout/layout.js';
import Balances from '../../../components/balances';
import LockDurationChart from '../../../components/lockDuration';

import GaugeCalculator from '../../../components/gaugeCalculator';
import VeAssetGeneration from '../../../components/veAssetGeneration';
import VeAssetModificationAmount from '../../../components/veAssetModificationAmount';
import VeAssetModificationDuration from '../../../components/veAssetModificationDuration';
import GaugeVoting from '../../../components/gaugeVoting';
import Header from '../../../components/header';
import Footer from '../../../components/footer';

import BigNumber from 'bignumber.js';
import classes from './project.module.css';

import stores from '../../../stores/index.js';
import {
  ERROR,
  GET_PROJECT,
  PROJECT_RETURNED,
  GAUGES_CONFIGURED,
  GET_TOKEN_BALANCES,
  TOKEN_BALANCES_RETURNED,
  CONFIGURE_RETURNED,
  CONNECT_WALLET, CONFIGURE_GAUGES,
} from '../../../stores/constants';

import { formatCurrency, formatAddress } from '../../../utils';

function Projects({ changeTheme }) {
  const router = useRouter();

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(function () {
    const projectReturned = (proj) => {
      setProject(proj);
      if (proj?.onload) {
        proj.onload();
      }
      forceUpdate();
    }

    const accountConfigured = () => {
      setAccount(stores.accountStore.getStore('account'))
    }

    stores.emitter.on(PROJECT_RETURNED, projectReturned);
    stores.emitter.on(TOKEN_BALANCES_RETURNED, projectReturned)
    stores.emitter.on(CONFIGURE_RETURNED, accountConfigured)

    setAccount(stores.accountStore.getStore('account'))

    if(router.query.project) {
      stores.dispatcher.dispatch({ type: GET_PROJECT, content: { id: router.query.project } });
      stores.dispatcher.dispatch({ type: GET_TOKEN_BALANCES, content: { id: router.query.project } });
      stores.dispatcher.dispatch({ type: CONFIGURE_GAUGES });
    }

    return () => {
      stores.emitter.removeListener(PROJECT_RETURNED, projectReturned);
      stores.emitter.removeListener(TOKEN_BALANCES_RETURNED, projectReturned)
      stores.emitter.removeListener(CONFIGURE_RETURNED, accountConfigured)
    };
  }, []);

  useEffect(
    function () {
      const gaugesReturned = (projs) => {
        stores.dispatcher.dispatch({ type: GET_PROJECT, content: { id: router.query.project } });
        stores.dispatcher.dispatch({ type: GET_TOKEN_BALANCES, content: { id: router.query.project } });
      };

      stores.emitter.on(GAUGES_CONFIGURED, gaugesReturned);

      return () => {
        stores.emitter.removeListener(GAUGES_CONFIGURED, gaugesReturned);
      };
    },
    [router],
  );

  const backClicked = () => {
    router.push('/');
  };

  const callConnect = () => {
    stores.emitter.emit(CONNECT_WALLET)
  }

  return (
    <Layout changeTheme={changeTheme} backClicked={backClicked}>
      <Header changeTheme={changeTheme} backClicked={backClicked} />

        <div className={classes.projectContainer}>
          <Balances project={project} />
          <div className={classes.projectCardContainer}>
            <div className={ classes.fakeGrid }>
            { (project && project.veTokenMetadata && BigNumber(project.veTokenMetadata.userLocked).gt(0)) &&
              <>
                <LockDurationChart project={project} />
                <VeAssetModificationAmount project={project} />
                <VeAssetModificationDuration project={project} />
              </>
            }
            { !(project && project.veTokenMetadata && BigNumber(project.veTokenMetadata.userLocked).gt(0)) &&
              <>
                <LockDurationChart project={project} />
                <VeAssetGeneration project={project} />
              </>
            }
            </div>
            <GaugeVoting project={project} />
          </div>
        </div>

      <Footer />
    </Layout>
  );
}

export default Projects;
