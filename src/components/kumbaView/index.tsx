import React from 'react';
import {View} from 'react-native';

import styles from './styles';

type KumbaViewProps = {
  children?: React.ReactNode;
  insideTab?: boolean;
};

const KumbaView = ({children, insideTab = false}: KumbaViewProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.content, insideTab ? {paddingBottom: 96} : {}]}>
        {children}
      </View>
    </View>
  );
};

export default KumbaView;
