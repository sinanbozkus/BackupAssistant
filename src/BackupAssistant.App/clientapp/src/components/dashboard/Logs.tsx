import React from "react";
import { Table, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";

library.add(faGoogleDrive);

export default function Logs() {
  return (
    <Table striped hover className="border">
      <thead>
        <tr>
          <th><span className="h5 mb-0">Provider</span></th>
          <th><span className="h5 mb-0">Start Date</span></th>
          <th><span className="h5 mb-0">End Date</span></th>
          <th><span className="h5 mb-0">Process</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <FontAwesomeIcon icon={["fab", "google-drive"]} className="mr-2" />
            Google Drive
          </td>
          <td>2020-04-25 00:12</td>
          <td>2020-04-25 00:53</td>
          <td>
            <Badge className="bg-success">Success</Badge>
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon={["fab", "google-drive"]} className="mr-2" />
            Google Drive
          </td>
          <td>2020-04-25 00:12</td>
          <td>2020-04-25 00:53</td>
          <td>
            <Badge className="bg-success">Success</Badge>
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon={["fab", "google-drive"]} className="mr-2" />
            Google Drive
          </td>
          <td>2020-04-25 00:12</td>
          <td>2020-04-25 00:53</td>
          <td>
            <Badge className="bg-success">Success</Badge>
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon={["fab", "google-drive"]} className="mr-2" />
            Google Drive
          </td>
          <td>2020-04-25 00:12</td>
          <td>2020-04-25 00:53</td>
          <td>
            <Badge className="bg-success">Success</Badge>
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon={["fab", "google-drive"]} className="mr-2" />
            Google Drive
          </td>
          <td>2020-04-25 00:12</td>
          <td>2020-04-25 00:53</td>
          <td>
            <Badge className="bg-success">Success</Badge>
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon={["fab", "google-drive"]} className="mr-2" />
            Google Drive
          </td>
          <td>2020-04-25 00:12</td>
          <td>2020-04-25 00:53</td>
          <td>
            <Badge className="bg-success">Success</Badge>
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon={["fab", "google-drive"]} className="mr-2" />
            Google Drive
          </td>
          <td>2020-04-25 00:12</td>
          <td>2020-04-25 00:53</td>
          <td>
            <Badge className="bg-success">Success</Badge>
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon={["fab", "google-drive"]} className="mr-2" />
            Google Drive
          </td>
          <td>2020-04-25 00:12</td>
          <td>2020-04-25 00:53</td>
          <td>
            <Badge className="bg-success">Success</Badge>
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon={["fab", "google-drive"]} className="mr-2" />
            Google Drive
          </td>
          <td>2020-04-25 00:12</td>
          <td>2020-04-25 00:53</td>
          <td>
            <Badge className="bg-success">Success</Badge>
          </td>
        </tr>
        <tr>
          <td>
            <FontAwesomeIcon icon={["fab", "google-drive"]} className="mr-2" />
            Google Drive
          </td>
          <td>2020-04-25 00:12</td>
          <td>2020-04-25 00:53</td>
          <td>
            <Badge className="bg-success">Success</Badge>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
