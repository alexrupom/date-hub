import '../bundles/stylesheets/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

var componentRequireContext = require.context("bundles", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);
