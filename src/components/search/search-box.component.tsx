import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

interface SearchBoxProps {
  value?: string;
  onValueChange?: any;
}

class SearchBox extends React.Component<SearchBoxProps> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    this.props.onValueChange(e.target.value);
  }

  styles = {
    root: {
      marginRight: 'auto',
      marginLeft: 'auto',
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  };

  render() {
    return (
      <Paper style={this.styles.root} elevation={1}>
        <InputBase
          style={this.styles.input}
          placeholder="Search Business"
          value={this.props.value}
          onChange={this.handleChange}
        />
        <IconButton style={this.styles.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
}

export default SearchBox;
