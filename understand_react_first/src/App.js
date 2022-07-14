import './App.css';
import Box from './Box';

function App() {
  return (
    <main>
      <Box name="정혜인" num="1"/>
      <Box name="가나다" num="2"/>
      <Box name="홍길동" num="3"/>
      <Box name="바바바" num="4"/>
    </main>
  );
}
//<main></main>이 꼭 있어야함!!!  JSX 식에는 부모 요소가 꼭 있어야하기때문
export default App;
