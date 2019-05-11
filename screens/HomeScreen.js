import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  SectionList,
  FlatList,
} from 'react-native';
import HomeHeader from 'components/HomeHeader';
import Title from 'components/Title';
import SearchBox from 'components/SearchBox';
import CalendarItem from 'components/CalendarItem';
import WeatherItem from 'components/WeatherItem';
import Colors from 'app-constants/Colors';
import Layout from 'app-constants/Layout';

const calendarItemWidthSize = Dimensions.get('window')

export default class extends React.Component {
  static navigationOptions = {
    header: <HomeHeader />,
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBox style={styles.searchBox} />
        <SectionList
          style={styles.container}
          contentContainerStyle={styles.contentContainerStyle}
          ListHeaderComponent={() => (
            <View style={[styles.content, styles.weather]}>
              <View style={[{ flexDirection: 'column', marginBottom: 15 }]}>
                <Title size={18}>Good morning, Tawan!</Title>
                <Title size={14}>Sunday 12, August 2019</Title>
              </View>
              <WeatherItem style={{ paddingTop: 5 }} />
            </View>
          )}
          SectionSeparatorComponent={() => <View style={styles.separator} />}
          renderSectionHeader={({section: { title }}) => (
            <View style={styles.sectionTitle}>
              <Title size={18}>{title}</Title>
            </View>
          )}
          renderItem={this.renderVerticalItems}
          sections={[
            { title: 'Today', data: ['default', 'success', 'warn', 'danger'], renderItem: this.renderHorizontalItems },
            { title: 'Tomorrow', data: ['default', 'success'] },
          ]}
        />
      </View>
    );
  }

  renderVerticalItems({ item, index, section }) {
    return (
      <CalendarItem 
        kind={item}
        style={{ 
          marginHorizontal: Layout.gutterWidth,
          marginBottom: Layout.gutterWidth,
        }}
      />
    )
  }

  renderHorizontalItems({ index, section: { data } }) {
    if (index >= 1) {
      return false;
    }
    
    return (
      <FlatList
        horizontal  
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => (
          <CalendarItem 
            kind={item}
            style={{ 
              height: 150,
              width: calendarItemWidthSize.width / 1.5,
              marginLeft: index === 0 ? Layout.gutterWidth : 0,
              marginRight: Layout.gutterWidth
            }}
          />
        )}
      />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    paddingHorizontal: Layout.gutterWidth,
  },
  contentContainerStyle: {
    paddingVertical: Layout.gutterWidth,
  },
  searchBox: {
    paddingBottom: Layout.gutterWidth / 2,
  },
  sectionTitle: {
    paddingHorizontal: Layout.gutterWidth,
    backgroundColor: '#FFFFFF',
    paddingVertical: Layout.gutterWidth,
    borderBottomWidth: 0.4,
    borderColor: Colors.borderColor,
  },
  separator: {
    marginVertical: Layout.gutterWidth / 2
  },
  weather: { 
    flexDirection: 'row', 
    alignItems: 'flex-start', 
    justifyContent: 'space-between',
  }
});
