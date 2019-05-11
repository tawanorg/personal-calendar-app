import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { Agenda } from 'vendors/Calendar';
import ScheduleHeader from 'components/ScheduleHeader';
import CalendarItem from 'components/CalendarItem';
import styles, { calendarTheme } from 'theme/ScheduleStyles';
import CalendarDay from 'components/CalendarDay';
import DisabledCalendarDay from 'components/CalendarDay/Disabled';
import CalendarItemHeader from 'components/CalendarItemHeader';
import EmptyCalendarItem from 'components/CalendarItem/EmptyCalendarItem';

export default class extends React.Component {
  static navigationOptions = {
    header: <ScheduleHeader />,
  };

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Agenda
          // the list of items that have to be displayed in agenda. If you want to render item as empty date
          // the value of date key kas to be an empty array []. If there exists no value for date key it is
          // considered that the date in question is not yet loaded
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected="2019-05-11"
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          onCalendarToggled={() => alert('onCalendarToggled')}
          // specify how each date should be rendered. day can be undefined if the item is not first in that day.
          renderHeadFirstItem={(date) => <CalendarItemHeader date={date} />}
          renderDay={(date, item) => date ? (
            <CalendarDay />
          ) : (
            <DisabledCalendarDay />
          )}
          theme={calendarTheme}
        />
      </View>
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <CalendarItem
        style={styles.calendarItem}
      />
    );
  }

  renderEmptyDate(date) {
    console.log('date', date)
    return [
      <CalendarItemHeader date={date} />,
      <EmptyCalendarItem
        style={styles.calendarItem}
      />
    ]
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}
 