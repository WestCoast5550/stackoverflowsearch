import React from "react";
import "./results.css";
import {
  Card,
  CardHeader,
  Button,
  CardActions,
  Avatar,
  Badge
} from "@material-ui/core";

export default ({ results, onQuickLook, disabled, onGetAnswers }) =>
  results.map(item => (
    <Card className="card">
      <CardHeader
        title={
          <div
            className={disabled ? "" : "author"}
            onClick={() =>
              disabled ? undefined : onGetAnswers(item.question_id)
            }
          >
            <Badge color="primary" badgeContent={item.answer_count}>
              {item.title}
            </Badge>
          </div>
        }
        subheader={
          <div
            className={disabled ? "" : "author"}
            onClick={() =>
              disabled
                ? undefined
                : onQuickLook({ type: "questions", value: item.owner.user_id })
            }
          >
            {item.owner.display_name}
          </div>
        }
        avatar={<Avatar src={item.owner.profile_image} />}
      />
      <CardActions>
        {item.tags.map(item => (
          <Button
            size="small"
            color="primary"
            onClick={() => onQuickLook({ type: "tag", value: item })}
            disabled={disabled}
          >
            {item}
          </Button>
        ))}
      </CardActions>
    </Card>
  ));
