var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src= {'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/user.png'}
          alt={'person'}/>
        
        <p className={'contactLabel'}> 
          Name: {this.props.item.firstName}
        </p>
        <p className={'contactLabel'}>
          Last Name: {this.props.item.lastName}
        </p>
        <a href={'mailto:' + this.props.item.email}>
          {this.props.item.email}
        </a>
      </div>
    )
  }
});