import React from 'react';
import CustomStyle from './custom.css';
import { LastWorksElements, LatestWorksHeadline, LatestWorksMainContainer, LatestWorksWrapper } from './LatestWorksElements'

const LatestWorks = () => {
    return (
        <>
            <LatestWorksMainContainer>
                <LatestWorksWrapper>
                    <LatestWorksHeadline>Latest Work</LatestWorksHeadline>
                    <LastWorksElements>
                        <img className="latestWorkImg" src={require('../../images/latest-work-1.jpg').default} />
                        <span className="latestWorkTitle">Latest work 1</span>
                    </LastWorksElements>
                    <LastWorksElements>
                        <img className="latestWorkImg" src={require('../../images/latest-work-2.jpg').default} />
                        <span className="latestWorkTitle">Latest work 2</span>
                    </LastWorksElements>
                    <LastWorksElements>
                        <img className="latestWorkImg" src={require('../../images/latest-work-3.jpg').default} />
                        <span className="latestWorkTitle">Latest work 3</span>
                    </LastWorksElements>
                    <LastWorksElements>
                        <img className="latestWorkImg" src={require('../../images/latest-work-4.jpg').default} />
                        <span className="latestWorkTitle">Latest work 4</span>
                    </LastWorksElements>
                    <LastWorksElements>
                        <img className="latestWorkImg" src={require('../../images/latest-work-5.jpg').default} />
                        <span className="latestWorkTitle">Latest work 5</span>
                    </LastWorksElements>
                    <LastWorksElements>
                        <img className="latestWorkImg" src={require('../../images/latest-work-6.jpg').default} />
                        <span className="latestWorkTitle">Latest work 6</span>
                    </LastWorksElements>
                </LatestWorksWrapper>
            </LatestWorksMainContainer>
        </>
    )
}

export default LatestWorks
