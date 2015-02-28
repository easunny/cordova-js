/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

module.exports = [
    {
        "id": "cordova/plugins/navigation",
        "clobbers": [
            "nt.navigation"
        ]
    },
    {
        "id": "cordova/plugins/notification",
        "clobbers": [
            "nt.notification"
        ]
    },
    {
        "id": "cordova/plugins/device",
        "clobbers": [
            "nt.device"
        ]
    },
    {
        "id": "cordova/plugins/CameraConstants",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "id": "cordova/plugins/CameraPopoverOptions",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "id": "cordova/plugins/Camera",
        "clobbers": [
            "nt.camera"
        ]
    },
    {
        "id": "cordova/plugins/CameraPopoverHandle",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "id": "cordova/plugins/ajax",
        "clobbers": [
            "nt.ajax"
        ]
    },
    {
        "id": "cordova/plugins/image",
        "clobbers": [
            "nt.image"
        ]
    }
];