import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeNewsfeed } from "../../actions/NewsfeedActions";
import { makeStyles } from "@material-ui/core/styles";
import ShowLoading from "../../util/ShowLoading";
import ShowErrors from "../../util/ShowErrors";
import Paper from "@material-ui/core/Paper";
import Typoegraphy from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  widget: {
    padding: 15,
    borderRadius: 15,
  },
}));

const DisplayAllEmployeeNews = (props) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const employee_id = props.employee_id;
  const employee_name = props.employee_name;

  let newsfeed = useSelector((state) => state.newsfeeds.news);
  let loading = useSelector((state) => state.newsfeeds.loading);
  let hasErrors = useSelector((state) => state.newsfeeds.hasErrors);

  useEffect(() => {
    dispatch(fetchEmployeeNewsfeed(employee_id));
  }, [dispatch, employee_id]);

  if (loading) {
    return <ShowLoading />;
  }

  if (hasErrors) {
    return <ShowErrors />;
  }

  if (newsfeed.length > 0) {
    return (
      <>
        <Paper
          className={classes.widget}
          elevation={3}
          square={false}
          style={{ padding: 15 }}
        >
          <Typoegraphy variant="h4" gutterBottom>
            {employee_name}'s Newsfeed
          </Typoegraphy>

          {newsfeed.map((article) => (
            <div key={article.author}>
              <Typoegraphy variant="h6">
                <a href={article.url} target="new">
                  {article.title}
                </a>
              </Typoegraphy>
              <Typoegraphy variant="subtitle2">
                {article.description}
              </Typoegraphy>
              <br />
            </div>
          ))}
        </Paper>
      </>
    );
  } else {
    return (
      <>
        Hmm... It looks like {employee_name} doesn't have any interests yet...
      </>
    );
  }
};

export default DisplayAllEmployeeNews;
