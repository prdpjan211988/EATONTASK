import React from 'react';
import Hero from '@pxblue/react-components/core/Hero';
import HeroBanner from '@pxblue/react-components/core/HeroBanner';
import InfoListItem from '@pxblue/react-components/core/InfoListItem';
import ScoreCard from '@pxblue/react-components/core/ScoreCard';
import CardJSON from './Card.json';

import { List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import { ChevronRight, MoreVert } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
import { GradeA, Leaf, Temp, Moisture as Humidity } from '@pxblue/icons-mui';

import top from './topology_40.png';

console.log(CardJSON);


export default () => {

    const list = CardJSON.map((item, index) => {
        return ( 
            <div key={index} style={{ display: 'flex', flexWrap: 'wrap' }}>
            <ScoreCard
            style={{ maxWidth: 400, padding: 10 }}
            headerColor={Colors.red[500]}
            headerBackgroundImage={top}
            headerTitle={item.title}
            headerSubtitle={item.subtitle}
            headerInfo={'4 Devices'}
            headerFontColor={Colors.white[50]}
            actionItems={[
                <MoreVert onClick={() => alert('something did')} />,
            ]}
            badge={
                <HeroBanner style={{ minWidth: 210 }}>
                    
                    <Hero
                        icon={<Temp fontSize={'inherit'} htmlColor={Colors.black[500]} />}
                        label={'Temperature'}
                        iconSize={48}
                        value={98}
                        units={'°F'}
                        fontSize={'normal'}
                    />
                    <Hero
                        icon={<Humidity fontSize={'inherit'} htmlColor={Colors.blue[300]} />}
                        label={'Humidity'}
                        value={54}
                        units={'%'}
                        iconSize={48}
                        fontSize={'normal'}
                    />
                </HeroBanner>
            }
            badgeOffset={0}
            actionRow={
                <List style={{ margin: 0 }}>
                    <ListItem>
                        <ListItemText primary="View Location" />
                        <ListItemSecondaryAction> <ChevronRight /> </ListItemSecondaryAction>
                    </ListItem>
                </List>
            }
        >
            <List style={{ padding: '16px 0' }}>
                <InfoListItem dense style={{ height: 36 }}
                    fontColor={Colors.red[500]}
                    iconColor={Colors.red[500]}
                    title={'1 Alarm'}
                    icon={<Leaf color={'inherit'} />}
                />
                <InfoListItem dense style={{ height: 36 }}
                    fontColor={Colors.blue[500]}
                    iconColor={Colors.blue[500]}
                    title={'1 Event'}
                    icon={<Leaf color={'inherit'} />}
                />
                <InfoListItem dense style={{ height: 36 }}
                    title={'Online'}
                    icon={<Leaf color={'inherit'} />}
                />
            </List>
        </ScoreCard></div>
        );
    });

    return (
        <div>
                {list}
        </div>
    );

}


import React from 'react';
import Hero from '@pxblue/react-components/core/Hero';
import HeroBanner from '@pxblue/react-components/core/HeroBanner';
import InfoListItem from '@pxblue/react-components/core/InfoListItem';
import ScoreCard from '@pxblue/react-components/core/ScoreCard';
import CardJSON from './Card.json';
import Grid from '@material-ui/core/Grid';
import { List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import { ChevronRight, MoreVert } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
import { GradeA, Leaf, Temp, Moisture as Humidity } from '@pxblue/icons-mui';

import top from './topology_40.png';

console.log(CardJSON);


export default () => (
    <div style={{ padding: 10 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <ScoreCard
                style={{ maxWidth: 400 }}
                headerColor={Colors.red[500]}
                headerBackgroundImage={top}
                headerTitle={'Substation 3'}
                headerSubtitle={'High Humidity Alarm'}
                headerInfo={'4 Devices'}
                headerFontColor={Colors.white[50]}
                actionItems={[
                    <MoreVert onClick={() => alert('something did')} />,
                ]}
                badge={
                    <HeroBanner style={{ minWidth: 210 }}>
                        <Hero
                            icon={<Temp fontSize={'inherit'} htmlColor={Colors.black[500]} />}
                            label={'Temperature'}
                            iconSize={48}
                            value={98}
                            units={'°F'}
                            fontSize={'normal'}
                        />
                        <Hero
                            icon={<Humidity fontSize={'inherit'} htmlColor={Colors.blue[300]} />}
                            label={'Humidity'}
                            value={54}
                            units={'%'}
                            iconSize={48}
                            fontSize={'normal'}
                        />
                    </HeroBanner>
                }
                badgeOffset={0}
                actionRow={
                    <List style={{margin: 0}}>
                        <ListItem>
                            <ListItemText primary="View Location" />
                            <ListItemSecondaryAction> <ChevronRight /> </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                }
            >
                <List style={{ padding: '16px 0' }}>
                    <InfoListItem dense style={{ height: 36 }}
                        fontColor={Colors.red[500]}
                        iconColor={Colors.red[500]}
                        title={'1 Alarm'}
                        icon={<Leaf color={'inherit'} />}
                    />
                    <InfoListItem dense style={{ height: 36 }}
                        fontColor={Colors.blue[500]}
                        iconColor={Colors.blue[500]}
                        title={'1 Event'}
                        icon={<Leaf color={'inherit'} />}
                    />
                    <InfoListItem dense style={{ height: 36 }}
                        title={'Online'}
                        icon={<Leaf color={'inherit'} />}
                    />
                </List>
            </ScoreCard>
            <ScoreCard
                style={{ flex: '1 1 0px', maxWidth: 400, marginLeft: 10 }}
                headerColor={Colors.blue[500]}
                headerBackgroundImage={top}
                headerTitle={'Substation 3'}
                headerSubtitle={'Normal'}
                headerInfo={'4 Devices'}
                headerFontColor={Colors.white[50]}
                actionItems={[
                    <MoreVert onClick={() => alert('something did')} />,
                ]}
                badge={
                    <HeroBanner>
                        <Hero
                            icon={<GradeA fontSize={'inherit'} htmlColor={Colors.green[500]} />}
                            iconBackgroundColor={Colors.white[50]}
                            label={'Health'}
                            iconSize={72}
                            value={98}
                            units={'%'}
                            fontSize={'normal'}
                        />
                    </HeroBanner>
                }
                badgeOffset={-52}
                actionRow={
                    <List style={{margin: 0}}>
                        <ListItem>
                            <ListItemText primary="View Location" />
                            <ListItemSecondaryAction> <ChevronRight /> </ListItemSecondaryAction>
                        </ListItem>
                    </List>
                }
            >
                <List style={{ padding: '16px 0' }}>
                    <InfoListItem dense style={{ height: 36 }}
                        title={'0 Alarms'}
                        icon={<Leaf color={'inherit'} />}
                    />
                    <InfoListItem dense style={{ height: 36 }}
                        fontColor={Colors.blue[500]}
                        iconColor={Colors.blue[500]}
                        title={'1 Event'}
                        icon={<Leaf color={'inherit'} />}
                    />
                    <InfoListItem dense style={{ height: 36 }}
                        title={'Online'}
                        icon={<Leaf color={'inherit'} />}
                    />
                </List>
            </ScoreCard>
        </div>
    </div>
);