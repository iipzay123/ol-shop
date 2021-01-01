import React, { PureComponent } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps, ViewStyle ,TextProps} from 'react-native'
import { COLOR_LIGHT } from '../styles/colors'
import { stylesButtonForm , } from './styles/ButtonForm'


interface P {
    label: string;
    stylesButton: ViewStyle;
    styleLabel: TextProps;
}

export class ButtonFrom extends PureComponent<TouchableOpacityProps & P> {
    render() {
        return (
            <TouchableOpacity
                {...this.props}
                style={[stylesButtonForm.container,this.props.stylesButton]}>
                <Text style={[stylesButtonForm.label, this.props.styleLabel]}>{ this.props.label || "label"}</Text>
            </TouchableOpacity>
        )
    }
}

export default ButtonFrom
