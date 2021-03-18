import Enyzme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enyzme.configure({
    adapter: new Enyzme(),
    disableLifecycleMethods: true
})