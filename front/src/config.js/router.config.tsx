
import { createBrowserRouter} from 'react-router-dom';
import * as Pages from '../page/index.page';
import App from '../App';

const Routes = createBrowserRouter([
        {
            path: "/",
            element: <Pages.Landing />
        },
]);

export default Routes;