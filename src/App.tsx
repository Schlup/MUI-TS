import { Grid } from '@mui/material'
import Section01 from './pages/Section01'
import Section02 from './pages/Section02'
import Navbar from './components/Navbar'
import Section03 from './pages/Section03'

function App() {
  return (
    <Grid>
      <Section03
        title='Parabéns você passou de módulo.'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsam et deleniti ea. Est et consequuntur voluptatum maiores, sit, provident autem molestiae fugit praesentium, cum dolorum eveniet facilis fuga quis.'
        svg1={<Svg01 />}
        svg1Bottom='0'
        svg1Right='2'
        svg1Animation='a'
        svg2={<Svg02 />}
        svg2Top='0'
        svg2Right='0'
        svg2Animation='b'
        svg3={<Svg03 />}
        svg3Bottom='0'
        svg3Right='0'
        svg3Animation='c'
      />
      {/* <Navbar />
      <Section01 />
      <Section02 /> */}
      {/* <Calculator /> */}
    </Grid>
  )
}

export default App



function Svg01() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FF0066" d="M46.8,-62.4C61.8,-53.6,75.7,-41.4,79.9,-26.4C84.1,-11.5,78.5,6.1,72.8,23.6C67,41.1,61,58.4,48.9,63.9C36.7,69.4,18.3,63.1,4,57.7C-10.4,52.2,-20.9,47.6,-34.5,42.6C-48.1,37.6,-64.9,32.1,-72,20.9C-79.1,9.7,-76.5,-7.2,-68,-18.6C-59.5,-30,-45,-36.1,-32.7,-45.7C-20.4,-55.2,-10.2,-68.3,2.9,-72.3C16,-76.3,31.9,-71.1,46.8,-62.4Z" transform="translate(100 100)" />
    </svg>
  )
}

function Svg02() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cccoil-grad"><stop stop-color="hsl(206, 75%, 49%)" stop-opacity="1" offset="0%"></stop><stop stop-color="hsl(331, 90%, 56%)" stop-opacity="1" offset="100%"></stop></linearGradient></defs><g stroke="url(#cccoil-grad)" fill="none" stroke-linecap="round"><circle r="363" cx="400" cy="400" stroke-width="7" stroke-dasharray="1939 2281" transform="rotate(360, 400, 400)" opacity="0.05"></circle><circle r="346.5" cx="400" cy="400" stroke-width="7" stroke-dasharray="1762 2177" transform="rotate(343, 400, 400)" opacity="0.10"></circle><circle r="330" cx="400" cy="400" stroke-width="7" stroke-dasharray="1595 2073" transform="rotate(326, 400, 400)" opacity="0.14"></circle><circle r="313.5" cx="400" cy="400" stroke-width="7" stroke-dasharray="1435 1970" transform="rotate(309, 400, 400)" opacity="0.19"></circle><circle r="297" cx="400" cy="400" stroke-width="7" stroke-dasharray="1284 1866" transform="rotate(291, 400, 400)" opacity="0.23"></circle><circle r="280.5" cx="400" cy="400" stroke-width="7" stroke-dasharray="1141 1762" transform="rotate(274, 400, 400)" opacity="0.28"></circle><circle r="264" cx="400" cy="400" stroke-width="7" stroke-dasharray="1007 1659" transform="rotate(257, 400, 400)" opacity="0.32"></circle><circle r="247.5" cx="400" cy="400" stroke-width="7" stroke-dasharray="881 1555" transform="rotate(240, 400, 400)" opacity="0.37"></circle><circle r="231" cx="400" cy="400" stroke-width="7" stroke-dasharray="764 1451" transform="rotate(223, 400, 400)" opacity="0.41"></circle><circle r="214.5" cx="400" cy="400" stroke-width="7" stroke-dasharray="655 1348" transform="rotate(206, 400, 400)" opacity="0.46"></circle><circle r="198" cx="400" cy="400" stroke-width="7" stroke-dasharray="554 1244" transform="rotate(189, 400, 400)" opacity="0.50"></circle><circle r="181.5" cx="400" cy="400" stroke-width="7" stroke-dasharray="462 1140" transform="rotate(171, 400, 400)" opacity="0.55"></circle><circle r="165" cx="400" cy="400" stroke-width="7" stroke-dasharray="378 1037" transform="rotate(154, 400, 400)" opacity="0.59"></circle><circle r="148.5" cx="400" cy="400" stroke-width="7" stroke-dasharray="302 933" transform="rotate(137, 400, 400)" opacity="0.64"></circle><circle r="132" cx="400" cy="400" stroke-width="7" stroke-dasharray="235 829" transform="rotate(120, 400, 400)" opacity="0.68"></circle><circle r="115.5" cx="400" cy="400" stroke-width="7" stroke-dasharray="176 726" transform="rotate(103, 400, 400)" opacity="0.73"></circle><circle r="99" cx="400" cy="400" stroke-width="7" stroke-dasharray="126 622" transform="rotate(86, 400, 400)" opacity="0.77"></circle><circle r="82.5" cx="400" cy="400" stroke-width="7" stroke-dasharray="84 518" transform="rotate(69, 400, 400)" opacity="0.82"></circle><circle r="66" cx="400" cy="400" stroke-width="7" stroke-dasharray="50 415" transform="rotate(51, 400, 400)" opacity="0.86"></circle><circle r="49.5" cx="400" cy="400" stroke-width="7" stroke-dasharray="25 311" transform="rotate(34, 400, 400)" opacity="0.91"></circle><circle r="33" cx="400" cy="400" stroke-width="7" stroke-dasharray="8 207" transform="rotate(17, 400, 400)" opacity="0.95"></circle><circle r="16.5" cx="400" cy="400" stroke-width="7" stroke-dasharray="0 104" opacity="1.00"></circle></g></svg>
  )
}

function Svg03() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 2000 2000"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ssstar-grad"><stop stop-color="hsl(157, 100%, 54%)" stop-opacity="1" offset="0%"></stop><stop stop-color="hsl(331, 87%, 61%)" stop-opacity="1" offset="100%"></stop></linearGradient></defs><g><g fill="url(#ssstar-grad)" id="star" transform="matrix(1,0,0,1,0,0)" opacity="1"><path d="M 500 500 C 1000 1000 1000 1000 2000 0 C 1000 1000 1000 1000 1500 1500 C 1000 1000 1000 1000 0 2000 C 1000 1000 1000 1000 500 500" stroke-linecap="round" stroke-linejoin="round"></path></g></g></svg>
  )
}