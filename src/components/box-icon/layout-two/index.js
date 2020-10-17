import React from 'react';
import PropTypes from 'prop-types'
import { MdTrendingFlat } from "react-icons/md";
import { Link } from 'gatsby'
import ReactVivus from 'react-vivus';
import Button from '../../ui/button'
import {
    BoxIconWrap,
    BoxIconInner,
    BoxIconImg,
    BoxIconContent,
    BoxIcontitle,
    BoxIconText,
    BoxIconBtn
} from './box-icon.style'

const BoxIcon = (props) => {
    const { id, icon, title, desc, path, ...restProps } = props;
    const { boxStyles, titleStyles, textStyles, buttonStyles } = restProps;
    const iconUrl = (icon && icon.svg && icon.svg.publicURL) || icon;

    return (
        <BoxIconWrap>
            <BoxIconInner {...boxStyles}>
                {iconUrl && (
                    <BoxIconImg>
                        <ReactVivus
                            id={`svg-${id}`}
                            option={{
                                file: iconUrl,
                                type: 'oneByOne',
                                animTimingFunction: 'EASE',
                                duration: 250
                            }}
                        />
                    </BoxIconImg>
                )}
                <BoxIconContent>
                    {title && <BoxIcontitle {...titleStyles}>{title}</BoxIcontitle>}
                    {desc && <BoxIconText {...textStyles}>{desc}</BoxIconText>}
                    <BoxIconBtn>
                        <Button to={path} {...buttonStyles} icon={<MdTrendingFlat />}>
                            Conoce más
                        </Button>
                    </BoxIconBtn>
                </BoxIconContent>
            </BoxIconInner>
        </BoxIconWrap>
    )
}

BoxIcon.propTypes = {
    heading: PropTypes.string,
    desc: PropTypes.string,
    path: PropTypes.string,
    boxStyles: PropTypes.object,
    titleStyles: PropTypes.object,
    textStyles: PropTypes.object,
    buttonStyles: PropTypes.object
}

BoxIcon.defaultProps = {
    buttonStyles: {
        varient: 'texted',
        fontWeight: 400,
        hover: "false",
        icondistance: "8px"
    },
    path: "/"
}

export default BoxIcon;