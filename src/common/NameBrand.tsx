import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import { COLOR_LIGHT } from '../styles/colors'
import { Fontsize, PADDING } from '../styles/maxing'

interface p {
    dark: boolean;
    light: boolean;
}

export class NameBrand extends PureComponent<p> {
    render() {
        return (
            <Text
                style={{
                fontSize: Fontsize(20),
                textAlign: 'center',
                fontWeight: 'bold',
                letterSpacing: 3,
                    marginBottom: PADDING,
                color: this.props.dark ? "#fff" : COLOR_LIGHT.PRIMARY
                }}>
              I'ZAZI
             </Text>
        )
    }
}

export default NameBrand
