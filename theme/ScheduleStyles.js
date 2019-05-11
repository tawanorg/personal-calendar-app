import {
  StyleSheet,
} from 'react-native';
import Layout from 'app-constants/Layout';
import Colors from 'app-constants/Colors';

export const calendarTheme = {
  // agendaDayTextColor: 'yellow',
  // agendaDayNumColor: 'green',
  // agendaTodayColor: 'red',
  // agendaKnobColor: 'blue'
  backgroundColor: '#ffffff',
  calendarBackground: Colors.primary,
  textSectionTitleColor: Colors.secondary,
  selectedDayBackgroundColor: '#FFFFFF',
  selectedDayTextColor: Colors.primary,
  todayTextColor: '#FFFFFF',
  dayTextColor: Colors.secondary,
  textDisabledColor: Colors.secondary,
  dotColor: '#FFFFFF',
  selectedDotColor: '#FFFFFF',
  arrowColor: 'orange',
  monthTextColor: '#FFFFFF',
  textDayFontFamily: 'Lato-Regular',
  textMonthFontFamily: 'Lato-Regular',
  textDayHeaderFontFamily: 'Lato-Regular',
  textMonthFontWeight: 'bold',
  textDayFontSize: 15,
  textMonthFontSize: 15,
  textDayHeaderFontSize: 15,
};

const calendarDayComponentStyle = {
  width: 50,
  position: 'relative',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  calendarItem: {
    marginRight: Layout.gutterWidth,
    marginVertical: Layout.gutterWidth / 2,
  },
});

export default styles;