import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from "react-native";
import Home from "../component/Home";
import HoatDong from '../component/HoatDong';
import HomeScreen  from './HomeSreen';
import DatHang from './DatHang';
const Tab = createBottomTabNavigator();

export default function MainApp() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabBarActiveTintColor: '#AA0000', // Màu khi mục đang được chọn
        tabBarInactiveTintColor: '#000000', // Màu khi mục không được chọn
      }}
    >
       <Tab.Screen 
        name="Trang chủ" 
        component={Home} 
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Image 
              source={
                route.state && route.state.index === 0
                  ? require('../image/menuapp/trangchu.png') // Hình ảnh màu đỏ cho trạng thái active
                  : require('../image/menuapp/trangchu.png') // Hình ảnh màu đen cho trạng thái không active
              }
              style={{ width: 50, height: 50 ,tintColor:'#AA0000'}}
              />
          ),
          tabBarLabelStyle: { fontSize: 12, marginTop: 5,fontStyle:'Regular',fontFamily:'Roboto' },
          tabBarActiveTintColor: '#AA0000', // Màu khi mục đang được chọn
          tabBarInactiveTintColor: '#000000', // Màu khi mục không được chọn
      headerShown: false,
        })}
      />
       <Tab.Screen 
        name="Đặt hàng" 
        component={DatHang} 
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Image 
              source={
                require('../image/menuapp/dathang.png')} // Hình ảnh màu đỏ cho trạng thái active}
              style={{ width: 30, height: 30 }}
              />
          ),
      headerShown: false,
        })}
      />
      <Tab.Screen 
        name="Hoạt động" 
        component={HoatDong} 
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Image 
              source={
                require('../image/menuapp/hoatdong.png')} // Hình ảnh màu đỏ cho trạng thái active}
              style={{ width: 30, height: 30 }}
              />
          ),
      headerShown: false,
        })}
      />
      <Tab.Screen 
        name="Cửa hàng" 
        component={""} 
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Image 
              source={
                require('../image/menuapp/cuahang.png')} // Hình ảnh màu đỏ cho trạng thái active}
              style={{ width: 30, height: 30 }}
              />
          ),
      headerShown: false,
        })}
      />
      <Tab.Screen 
        name="Khác" 
        component={""} 
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Image 
              source={
                require('../image/menuapp/khac.png')} // Hình ảnh màu đỏ cho trạng thái active}
              style={{ width: 30, height: 30 }}
              />
          ),
      headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
};
