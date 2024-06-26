import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Theme } from './Theme';
import { ThemeContext } from './ThemeContext';
import { useContext } from "react";



const HomeScreen = () => {
    const { theme } = useContext(ThemeContext);
    let activeTheme = Theme[theme.mode];

    const transaction = [
        {
            id: '1',
            icon:require('./assets/apple.png'),
            title : "Apple Store",
            category:"Entertainment",
            amount:"- $5.99",
            tint: activeTheme.secondary,
            color: activeTheme.secondary
        },
        {
            id: '2',
            icon:require('./assets/spotify.png'),
            title:"Spotify",
            category:"Music",
            amount:"- $12.99",
            color: activeTheme.secondary
        },
        {
            id: '3',
            icon:require('./assets/moneyTransfer.png'),
            title:"Money Transfer",
            category:"Transaction",
            amount:"$300",
            tint: activeTheme.secondary,
            color: '#007bff'
        },
        {
            id: '4',
            icon:require('./assets/grocery.png'),
            title:"Grocery",
            category:"Shopping",
            amount:"- $88",
            color: activeTheme.secondary
        }
      ];
    
    const TransactionItem = ({ icon, title, category, amount, tint, color }) => (
        <View style={[styles.transactionItem, {borderBottomColor: activeTheme.tab}]}>
        <Image source={icon} style={[styles.transactionIcon, {tintColor: tint}]}/>
        <View style={styles.transactionDetails}>
            <Text style={[styles.transactionName, {color: activeTheme.secondary}]}>{title}</Text>
            <Text style={styles.transactionCategory}>{category}</Text>
        </View>
        <Text style={[styles.transactionAmount, {color: color}]}>{amount}</Text>
        </View>
    );
  return (
    <ScrollView style={[styles.container, {backgroundColor: activeTheme.primary}]}>
      <View style={styles.header}>
        <Image
          source={require('./assets/profile.png')}
          style={styles.profileImage}
        />
        <View>
            <Text style={styles.welcomeText}>Welcome back,</Text>
            <Text style={[styles.userName, {color: activeTheme.secondary}]}>Ephraim Hafoba</Text>
        </View>

        <View style={{marginHorizontal: '37%'}}>
            <Image source={require('./assets/search.png')} style={[styles.iconCircle, {width: 35, height:35, tintColor: activeTheme.secondary, backgroundColor: activeTheme.tab}]}/>
        </View>
      </View>

        <Image source={require('./assets/Card.png')}/>    

      <View style={styles.actionButtons}>
        
        <TouchableOpacity style={[styles.actionButton]}>
        <Image source={require('./assets/send.png')} style={[styles.iconCircle, {width: 35, height:35, tintColor: activeTheme.secondary, backgroundColor: activeTheme.tab}]}/>
          <Text style={[styles.actionText, {marginTop: 6, color: activeTheme.secondary}]}>Sent</Text>
        </TouchableOpacity>
                
        <TouchableOpacity style={styles.actionButton}>
        <Image source={require('./assets/recieve.png')} style={[styles.iconCircle, {width: 35, height:35, tintColor: activeTheme.secondary, backgroundColor: activeTheme.tab}]}/>
          <Text style={[styles.actionText, {marginTop: 6, color: activeTheme.secondary }]}>Receive</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
        <Image source={require('./assets/loan.png')} style={[styles.iconCircle, {width: 35, height:35, tintColor: activeTheme.secondary, backgroundColor: activeTheme.tab}]}/>
          <Text style={[styles.actionText, {marginTop: 6, color: activeTheme.secondary}]}>Loan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
        <Image source={require('./assets/topUp.png')} style={[styles.iconCircle, {width: 35, height:35, tintColor: activeTheme.secondary, backgroundColor: activeTheme.tab}]}/>
          <Text style={[styles.actionText, {marginTop: 6, color: activeTheme.secondary}]}>Topup</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transactionsHeader}>
        <Text style={[styles.transactionsTitle, {color: activeTheme.secondary}]}>Transaction</Text>
        <Text style={styles.transactionsSellAll}>Sell All</Text>
      </View>

        <FlatList
        data={transaction}
        vertical
        renderItem={({item}) => (
            <TransactionItem
            title={item.title}
            icon={item.icon}
            category={item.category}
            amount={item.amount}
            tint={item.tint}
            color={item.color}
            />
        )}
        />
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 18
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 25,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: '#555',
  },
  userName: {
    fontSize: 18,
    marginTop:6,
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  actionText: {
    fontSize: 16,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionsSellAll: {
    fontSize: 16,
    color: '#007bff',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  transactionIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionCategory: {
    fontSize: 14,
    color: '#aaa',
  },
  transactionAmount: {
    fontSize: 16,
    color: '#000',
  },
  row: {
    flexDirection: 'row'
  },
  iconCircle: {
    height: 55,
    width: 55,
    borderRadius: 30,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
},
});

export default HomeScreen;
