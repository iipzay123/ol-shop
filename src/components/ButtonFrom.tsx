import React, { PureComponent } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native'
import { COLOR_LIGHT } from '../styles/colors'
import { stylesButtonForm , } from './styles/ButtonForm'


interface P {
    label: string;
    stylesButton: ViewStyle;
}

export class ButtonFrom extends PureComponent<TouchableOpacityProps & P> {
    render() {
        return (
            <TouchableOpacity
                {...this.props}
                style={[stylesButtonForm.container,this.props.stylesButton]}>
                <Text style={stylesButtonForm.label}>{ this.props.label || "label"}</Text>
            </TouchableOpacity>
        )
    }
}

export default ButtonFrom
