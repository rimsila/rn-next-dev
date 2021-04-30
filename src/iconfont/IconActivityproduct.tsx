/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconActivityproduct: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M924.360888 191.304441h-35.785264a146.994852 146.994852 0 0 0 23.673329-87.53626 107.355791 107.355791 0 0 0-52.852082-82.581378 151.123921 151.123921 0 0 0-122.220439-14.314105 452.821221 452.821221 0 0 0-225.722433 165.162755 451.169594 451.169594 0 0 0-225.447161-165.162755 150.84865 150.84865 0 0 0-122.49571 15.41519A107.906334 107.906334 0 0 0 110.108504 103.768181a146.994852 146.994852 0 0 0 23.673328 87.53626H98.547111A98.822382 98.822382 0 0 0 0 289.851552v147.820666a98.27184 98.27184 0 0 0 69.368357 93.867499 98.547111 98.547111 0 0 0-5.780696 33.307823v360.330078a98.822382 98.822382 0 0 0 98.822382 98.822382h698.638456a98.822382 98.822382 0 0 0 98.54711-98.822382V564.84754a98.547111 98.547111 0 0 0-5.780696-33.307823 98.822382 98.822382 0 0 0 69.368357-93.867499v-147.545395a98.822382 98.822382 0 0 0-98.822382-98.822382zM192.689881 52.017184c20.645344-13.488292 89.187888-15.415191 135.984002 14.589377A610.551653 610.551653 0 0 1 467.961141 193.506611H183.330659a158.005703 158.005703 0 0 1-34.133637-77.626495A75.974868 75.974868 0 0 1 192.689881 52.017184z m297.568232 929.315771H149.197022a55.054252 55.054252 0 0 1-42.667045-42.667045V563.471183A30.004567 30.004567 0 0 1 137.63563 533.191345h352.622483v448.14161z m0-490.533384H85.33409a50.925183 50.925183 0 0 1-42.667045-42.667045v-170.117638A50.925183 50.925183 0 0 1 85.33409 235.347843h405.199294v256.002271z m205.077088-425.294095c46.796114-30.279839 115.338658-27.527126 135.70873-14.864648a76.800681 76.800681 0 0 1 42.942317 64.413474A161.8595 161.8595 0 0 1 839.852612 193.506611H554.121045a614.680722 614.680722 0 0 1 141.214156-127.175322z m220.217007 873.160434a55.054252 55.054252 0 0 1-42.667045 42.667045H532.925158V533.191345H886.373454a30.279839 30.279839 0 0 1 30.279839 30.279838v375.194727z m63.862932-491.359198a50.37464 50.37464 0 0 1-42.667045 42.391774H531.548801V235.623114h406.300379a50.925183 50.925183 0 0 1 42.667045 42.391774v169.016553z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconActivityproduct.defaultProps = {
  size: 26,
};

IconActivityproduct = React.memo ? React.memo(IconActivityproduct) : IconActivityproduct;

export default IconActivityproduct;