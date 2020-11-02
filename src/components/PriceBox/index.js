import React, {useState, useEffect, useRef} from 'react';
import classNames from 'classnames';
import style from "./priceBox.module.scss";

const PriceBox = ({level, buttonText, featuresList}) => {
    const [boxData, setBoxData] = useState(null);
    const featuresListRef = useRef(null);

    useEffect(() => {
        if (featuresListRef)
        handleFeaturesListHeight(featuresListRef.current.scrollHeight)
    }, [featuresListRef])

    function handleFeaturesListHeight(height) {
        setBoxData({
            level,
            buttonText,
            featuresList,
            isCollapsible: height > 200,
            isCollapsed: true
        });
    }

    function toggleSeeAllFeatures() {
        setBoxData(prevState => {
            return {
                ...prevState,
                isCollapsed: !prevState.isCollapsed
            }
        });
    }

    const boxClassName = boxData?.isCollapsed
        ? classNames(style.Box, style.CollapsedBox) : classNames(style.Box, style.OpenedBox);

    return (
        <div className={boxClassName}>
            <h3>{level}</h3>
            <button className={style.BoxButton}>{buttonText}</button>
            <ul ref={featuresListRef}>
                {
                    featuresList.map(feature => <li key={feature}>{feature}</li>)
                }
            </ul>
            {boxData?.isCollapsible &&
                <div className={style.SeeAllFeaturesButton}>
                    <button onClick={toggleSeeAllFeatures}>
                        {boxData?.isCollapsed ? 'See All Features' : 'See Less Features'}
                    </button>
                </div>
            }
        </div>
    );
}

export default PriceBox;