import React, { Component } from 'react';
import { Typography, Divider, Card, Row, Col, Input, Icon, List } from 'antd';

import styles from './style.css';

const { Title } = Typography;
const { Search } = Input;

export default class TodoList extends Component {
  state = {
    inputVal: '',
    searchVal: '',
    isSearch: false
  };

  handleInputVal = inputVal => {
    this.setState(() => ({
      inputVal
    }));
  };

  handleSearchVal = searchVal => {
    const {setAllSearchedTrue} = this.props;
    if (!searchVal.trim().length) {
      setAllSearchedTrue();
    }
    this.setState(() => ({
      searchVal
    }));
  };

  handleSearchResult = searchVal => {
    const {setNoneSearched} = this.props;
    setNoneSearched(searchVal);
  };

  render() {
    const { todoList, toggleMarked, addItem } = this.props;
    const { inputVal, searchVal } = this.state;

    const newArr = [];
    todoList.forEach(item => {
      if (item.searched) {
        newArr.push(item)
      }
    })

    return (
      <div id='todo-list' className={styles.marginTop}>
        <Row>
          <Col lg={{ span: 14, offset: 5 }} sm={{ span: 20, offset: 2 }}>
            <Card>
              <Typography>
                <Title className={styles.center}>Todo List</Title>
                <Divider />

                <Row>
                  <Col span={9} offset={2}>
                    <Search
                      placeholder='添加todo内容'
                      value={inputVal}
                      onChange={e => this.handleInputVal(e.target.value)}
                      onSearch={val => {
                        addItem(val);
                        this.setState(() => ({ inputVal: '' }));
                      }}
                      enterButton={<Icon type='edit' />}
                    />
                  </Col>
                  <Col span={9} offset={2}>
                    <Search
                      placeholder='搜索todo列表'
                      value={searchVal}
                      onChange={e => this.handleSearchVal(e.target.value)}
                      onSearch={this.handleSearchResult}
                      enterButton
                    />
                  </Col>
                </Row>

                <Row style={{ marginTop: 15 }}>
                  <Col span={20} offset={2}>
                    <List
                      size='large'
                      bordered
                      dataSource={newArr}
                      renderItem={item => {
                        return (
                          <List.Item onClick={() => toggleMarked(item.uuid)}>
                            <Typography.Text
                              type={item.marked ? 'secondary' : null}
                              delete={item.marked}
                            >
                              {item.text}
                            </Typography.Text>
                          </List.Item>
                        );
                      }}
                    />
                  </Col>
                </Row>
              </Typography>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
