import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import BG_1 from './components/Layout/img/bg1.jpg'
import BG_3 from './components/Layout/img/bg3.jpg'
import './index.css'

const App = () => {
  return (
      <>
          <Header title={'This is title'} descr={'This is Description!'}/>
          <Layout title={'Заголовок 1'} descr={'Описание 1'} urlBg={BG_1} colorBg={'red'}/>
          <Layout title={'Заголовок 2'} descr={'Описание 2'} urlBg colorBg={'green'}/>
          <Layout title={'Заголовок 3'} descr={'Описание 3'} urlBg={BG_3} colorBg={'blue'}/>
          <Footer />
      </>
  );
}

export default App;
