/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import { Box, Card, Divider, Grid, Typography } from '@mui/material';
import FeatureAlternating from '../../components/feature/FeatureAlternating';
import FeatureCard from '../../components/feature/FeatureCard';
import Spacer from '../../components/Spacer';
import CompaniesConst from './Companies.Const';

import CompaniesBanner from './components/Banner';
import CompaniesFeature from './components/Feature';
import CompaniesTrustedBrand from './components/TrustedBrand';
import CompaniesWorkFlow from './components/WorkFlow';
import {CompaniesStyles as styles} from './styles/Companies.Styles'; 


const Companies = () => {
  return (
    <div>
        <CompaniesBanner/>
        <Divider/>
        <CompaniesTrustedBrand/>
        <Divider/>
        <Spacer height/>
        <CompaniesWorkFlow css={styles.workFlow}/>
        <Spacer height/>
        <CompaniesFeature css={styles.features}/>
        <Spacer height/>
        


    </div>
  )
}

export default Companies


const Test = (props) => {
  var data = CompaniesConst.Features
  data = data.features[0]
  return (
    <FeatureAlternating data={data} right='true' stacked='true'/>
  )
}