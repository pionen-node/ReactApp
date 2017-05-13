### Installation

```shell
npm install; npm run ios;
```


### App Structure: (outdated, todo)

| Component          | Path                                |
|--------------------|-------------------------------------|
| App                | src/app/components/App/App          |
| AppContainer       | src/app/components/App/Container    |
| AppSceneHome       | src/app/components/App/Scene/Home   |
| AppSceneList       | src/app/components/App/Scene/List   |
| AppSceneSearch     | src/app/components/App/Scene/Search |
| AppSceneSwipe      | src/app/components/App/Scene/Swipe  |
| AppSceneTest       | src/app/components/App/Scene/Test   |

```html
    <App config>
        <Drawer renderSidebar style>
            <Navigation>
                <NavigationScene sceneState>
                    <AppContainer renderHeader renderFooter style title>
                        <Text>Hello World</word>
                    </AppContainer>
                </NavigationStore>
            </Navigation>
        </Drawer>
    </App>
```