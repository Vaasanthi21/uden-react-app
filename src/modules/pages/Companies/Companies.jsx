/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import { Divider } from '@mui/material';
import CompaniesBanner from './components/Banner';
import CompaniesTrustedBrand from './components/TrustedBrand';

const Companies = () => {
  return (
    <div>
        <CompaniesBanner/>
        <Divider/>
        <CompaniesTrustedBrand/>
        <Divider/>


    </div>
  )
}

export default Companies