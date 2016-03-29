const React = require('react');
const ReactDOM = require('react-dom');

module.exports = React.createClass({
 displayName: 'UsersForm',
 render: function() {
   return (
     <form onSubmit={this.onSubmit}>
      <input ref="title" placeholder="title" type="" name="title" />
      <input ref="url" placeholder="url" type="" name="url" />
      <textarea ref="description" type="" name="description"></textarea>
      <input type="submit" value="Add" />
     </form>
   );
 },

 onSubmit: function(e){
   e.preventDefault();

   var user = {
    title: ReactDOM.findDOMNode(this.refs.title).value,
    url: ReactDOM.findDOMNode(this.refs.url).value,
    description: ReactDOM.findDOMNode(this.refs.description).value
  };

   this.props.onSubmit(user);
   // props.onSubmit
 }
});
