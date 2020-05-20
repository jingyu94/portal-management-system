import React from 'react';
import '../style/Modal.scss';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import ProcessInfo from './ProcessInfo';

const Modal = ({notificationDetail, isOpen, close }) => {
  return (
    <div>
    {
      isOpen ?
      <div>
      <div className="Modal-overlay" onClick={close} />
        <div className="Modal">
        <p className="title"></p>
          <div className="content">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>{notificationDetail.deviceId} {notificationDetail.process} : {notificationDetail.startedTime} ~ {notificationDetail.finishedTime} </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {
                                JSON.stringify(notificationDetail)=='{}' ?
                                <TableCell>-</TableCell>
                                :
                                <div>
                                <TableCell>{notificationDetail.action}</TableCell>
                                  <TableCell>{notificationDetail.action}</TableCell>
                                  <TableCell>{notificationDetail.action}</TableCell>
                                  <TableCell>{notificationDetail.action}</TableCell>
                                  </div>
                                }
                    </TableBody>
                </Table>
          </div>
          <div className="button-wrap">
            <button onClick={close}>Close</button>
          </div>
        </div>
        </div>
      :
      null
    }
</div>
  )
}
export default Modal;