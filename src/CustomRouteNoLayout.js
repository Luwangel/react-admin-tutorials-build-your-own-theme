import * as React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { crudGetList } from "react-admin";
import { makeStyles, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const CustomRouteNoLayout = (props) => {
  const classes = useStyles(props);
  const dispatch = useDispatch();

  const loaded = useSelector(
    (state) =>
      state.admin.resources.posts && state.admin.resources.posts.list.total > 0
  );

  const total = useSelector((state) =>
    state.admin.resources.posts ? state.admin.resources.posts.list.total : 0
  );

  useEffect(() => {
    dispatch(
      crudGetList(
        "posts",
        { page: 0, perPage: 10 },
        { field: "id", order: "ASC" }
      )
    );
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h2" component="h1">
        Posts
      </Typography>
      {!loaded && (
        <Typography className="app-loader" variant="body1">
          Loading...
        </Typography>
      )}
      {loaded && (
        <Typography variant="body1">
          Found <span className="total">{total}</span> posts !
        </Typography>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  title: {
    color: theme.palette.secondary.main,
  },
}));

export default CustomRouteNoLayout;
