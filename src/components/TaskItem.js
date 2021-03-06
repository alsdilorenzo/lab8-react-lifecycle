import React from 'react';
import moment from 'moment';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

const TaskItem = (props) => {

    let {task, editTask, deleteTask} = props;

    return (
        <ListGroup.Item id={task.id}>
            <div className="d-flex w-100 justify-content-between">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox"
                           className={task.important ? "custom-control-input important" : "custom-control-input"}
                           id={"check-t" + task.id + task.important} defaultChecked={task.completed}/>
                    <label className="custom-control-label" htmlFor={"check-t" + task.id}>{task.description}</label>
                    <span className="badge badge-dark ml-4">{task.project}</span>
                </div>
                {!task.privateTask && (
                    <img src="https://image.flaticon.com/icons/svg/615/615075.svg" width="20" height="20" alt=""/>)}

                {task.deadline && (
                    <small
                        className={task.deadline.isBefore(moment()) ? "date expired" : "date"}>{task.deadline.format("dddd, MMMM Do YYYY, h:mm:ss a")} </small>
                )}

                <div>
                    <Image width="20" height="20" className="img-button" src="https://image.flaticon.com/icons/svg/1159/1159633.svg" alt=""
                           onClick={() => editTask(task)}/>
                    <Image width="20" height="20" className="img-button" src="https://image.flaticon.com/icons/svg/833/833262.svg" alt=""
                           onClick={() => deleteTask(task)}/>
                </div>

            </div>
        </ListGroup.Item>
    );
}
export default TaskItem;