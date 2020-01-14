/* React core module imports */
import React from 'react';

/* Scorecard and relavent imports */
import ScoreCard from '@pxblue/react-components/core/ScoreCard';
import Hero from '@pxblue/react-components/core/Hero';
import HeroBanner from '@pxblue/react-components/core/HeroBanner';
import InfoListItem from '@pxblue/react-components/core/InfoListItem';

/* Import for list the items, Inside the score card, Eg list of events, Alarms counts etc.. */
import { List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import { ChevronRight, MoreVert } from '@material-ui/icons';

/* json for score card */
import CardJSON from './Card.json';

import Stylecss from './App.css';


/* Import Icons */
import CloudCircleIcon from '@material-ui/icons/CloudCircle';
import InfoIcon from '@material-ui/icons/Info';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

/* PX-Blue icons, colors import */
import * as Colors from '@pxblue/colors';
import { Temp, Moisture as Humidity, Flow, GasCylinder } from '@pxblue/icons-mui';

/* Grid imports for responsive */
import Grid from '@material-ui/core/Grid';

/* Asset imports for header background */
import top from './topology_40.png';

/**
 * Using arrow function Components use a function block to return score card component.
 * Description :: This block will iteratin the json and it return score card component.
 *  */ 
export default () => {
    const weather = (param) => {
        switch (param) {
            case 'humidity':
                return <Humidity fontSize={'inherit'} htmlColor={Colors.black[500]} />
            case 'flow':
                return <Flow fontSize={'inherit'} htmlColor={Colors.black[500]} />
            case 'temperature':
                return <Temp fontSize={'inherit'} htmlColor={Colors.black[500]} />
            case 'volume':
                return <GasCylinder fontSize={'inherit'} htmlColor={Colors.black[500]} />
            default:
                return <Temp fontSize={'inherit'} htmlColor={Colors.black[500]} />
        }
    };

    const HeroDetails = (value) => {
        return Object.keys(value).map((key, index) => {
            return <Hero key={index}
                icon={weather(key)}
                label={key}
                iconSize={48}
                value={value[key]}
                units={'°F'}
                fontSize={'normal'}
            />
        });
    };

    const scoreCardList = CardJSON.map((item, index) => {
        return (
            <Grid style={{ padding: 5 }} key={index} item lg={4} md={4} sm={6} xs={12}>
                <ScoreCard
                    style={{ maxWidth: 420, borderRadius: 10 }}
                    headerColor={item.alarmCount > 0 ? Colors.red[500] : Colors.blue[500]}
                    headerBackgroundImage={top}
                    headerTitle={item.title}
                    headerSubtitle={item.subtitle}
                    headerInfo={`${item.deviceCount} Devices`}
                    headerFontColor={Colors.white[50]}
                    actionItems={[
                        <MoreVert onClick={() => alert('something did')} />,
                    ]}
                    badge={
                        <HeroBanner style={{ minWidth: 120 }}>
                            {HeroDetails(item.values)}
                        </HeroBanner>
                    }
                    badgeOffset={0}
                    actionRow={
                        <List style={{ margin: 0, paddingBottom: 10 }}>
                            <ListItem>
                                <ListItemText primary="View Location" />
                                <ListItemSecondaryAction> <ChevronRight /> </ListItemSecondaryAction>
                            </ListItem>
                        </List>
                    }
                >
                    <List style={{ padding: '16px 0' }}>
                        <InfoListItem dense style={{ height: 36 }}
                            fontColor={item.alarmCount > 0 ? Colors.red[500] : Colors.blue[500]}
                            iconColor={item.alarmCount > 0 ? Colors.red[500] : Colors.blue[500]}
                            title={`${item.alarmCount} Alarm`}
                            icon={<NotificationsActiveIcon color={'inherit'} />}
                        />
                        <InfoListItem dense style={{ height: 36 }}
                            fontColor={item.eventCount > 0 ? Colors.red[500] : Colors.blue[500]}
                            iconColor={item.eventCount > 0 ? Colors.red[500] : Colors.blue[500]}
                            title={`${item.eventCount} Event`}
                            icon={<InfoIcon color={'inherit'} />}
                        />
                        <InfoListItem dense style={{ height: 36 }}
                            title={item.commStatus}
                            icon={<CloudCircleIcon color={'inherit'} />}
                        />
                    </List>
                </ScoreCard>
            </Grid>
        );
    });

    return (
        <Grid container className="score-card-container">
            {scoreCardList}
        </Grid>
    );

}
