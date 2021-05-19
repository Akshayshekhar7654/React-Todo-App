import React from 'react';

class ListItem extends React.Component{


    onRemove = () =>{
        this.myRef.current.classname = "active";
        setTimeout(()=>{
            this.props.handleDelete();
        }, 500)
    }

    render(){
        const {item} = this.props;
        return(
             <li> {item}
             <div className="row">
                 <i className="fa fa-pencil" title="Edit" />
                 <i className="fa fa-trash" title="Delete"
                 onClick={this.onRemove} />
             </div>
              </li>
        );
    }
}

export default ListItem;