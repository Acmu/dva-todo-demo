import React from 'react';
import { connect } from 'dva';
import { routerRedux, withRouter } from 'dva/router';

const routeMap = [
  {
    title: 'todo list',
    path: 'todo'
  }
];

function IndexPage(props) {
  const { dispatch } = props;
  return (
    <div>
      <ul>
        {routeMap.map(item => {
          return (
            <li key={item.path}>
              <button
                onClick={() => {
                  dispatch(
                    routerRedux.push({
                      pathname: item.path
                    })
                  );
                }}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default withRouter(connect()(IndexPage));
