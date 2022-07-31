import { View, Text, Image } from 'react-native';
import React from 'react';

import {EthPrice} from './SubInfo';
import {COLORS, SIZES, FONTS} from '../constants';

const DetailsBid = ({bid}) => {
  return (
    <View
    style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SIZES.base,
        paddingTop: SIZES.base*2,
    }}
    >
      <Image
      source={bid.image}
      resizeMode = "contain"
      style={{width: 48, height: 48}}
      />
      <View>
        <Text
        style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small-2,
            color: COLORS.primary,
            marginTop: 3,
        }}
        >
            Bid placed by {bid.name}
        </Text>
      </View>

      <EthPrice 
      price={bid.price}
      />
    </View>
  )
}

export default DetailsBid