package com.myreactnativeapp;

import android.os.Bundle; // 1. Bundle
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // 2. 导入启动包

public class MainActivity extends ReactActivity {

  /**
  * Returns the name of the main component registered from JavaScript.
  * This is used to schedule rendering of the component.
  */
  @Override
  protected String getMainComponentName() {
    return "myReactNativeApp";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) { // 3. 显示启动方式
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);
  }
}
