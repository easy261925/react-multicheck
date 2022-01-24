import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';

configure({ adapter: new Adapter() });

const { JSDOM } = jsdom;
const { window } = new JSDOM('');
const { document } = new JSDOM(``).window;
global.document = document;
global.window = window;
