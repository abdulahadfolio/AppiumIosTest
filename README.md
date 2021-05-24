# AppiumIosTest

  ## What is Appium?
  
    * Appium Server is written in Node.js.
    
    * It uses a client-server architecture.
    
    * The test script can be written in multiple programming languages such as Ruby, Python, JAVA, JavaScript, C# and PHP.
    
    * Client machines communicate with the server via the JSON Wire protocol to begin an automation test session by sending a request to the appium server.
    
    * The Appium Server invokes the iOS or Android drivers by creating a new test automation session.
    
    * The Appium Server ties with the corresponding native testing frameworks to link with the bootstrap.jar/bootstrap.js running on the mobile devices to perform     
    operations on the device.
    
    * Through Appium, it is feasible for testers/developers to use the same test script to test iOS and Android devices.
    
    * However, the problematic point here is to differentiate between iOS and Android devices’ test automation requests.Appium overcomes this by providing the 
    desired capabilities. When a request session is created, the key-value pairs such as deviceName, platformName, appPackage, appActivity etc., have been 
    mentioned. Based on those mentioned key-value pairs, the Appium Server directs the client requests to the corresponding test frameworks.

  ## IOS setup
    - Pre-requisites
      
      1 Xcode installed on your macOS.
        
      2 brew install carthage(to launch webdriver agent which is required to access xcuitestwebdriver to access xcuitest library)
        
    1 Install via NPM with the following command:
      npm install -g appium(make sure to give user access to run it successfully)
      
    2 Setting Up the Demo Project for UI Automation
    
    3 Setup Web Scripts(can be any language)
    
    4 Building the App Using XcodeBuild
    
    5 Run Tests
    

