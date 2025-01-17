var choices = require('./choices');
exports.getFeedbacks = function (instance) {
	var self = instance;
	return {
		loaded: {
            type: 'boolean',
            label: 'Change button loaded',
            description: 'Foreground and background colors when image is loaded',
            options: [
                {
                    type: 'dropdown',
                    label: 'Source',
                    id: 'Key',
                    default: 'Display1',
                    choices: choices.getChoicesForDisplay()
                }
            ],
            style: {
                color: self.rgb(255, 255, 255),
                bgcolor: self.rgb(0, 255, 0)
            },
            callback: function (feedback) {
                return self.displayStates[feedback.options.Key].loaded;
            }
		},
        displayed: {
            type: 'boolean',
            label: 'Change button displayed',
            description: 'Foreground and background colors when image is displayed',
            options: [
                {
                    type: 'dropdown',
                    label: 'Source',
                    id: 'Key',
                    default: 'Display1',
                    choices: choices.getChoicesForDisplay()
                }
            ],
            style: {
                color: self.rgb(255, 255, 255),
                bgcolor: self.rgb(255, 0, 0)
            },
            callback: function (feedback) {
                return self.displayStates[feedback.options.Key].displayed;
            }
        },
        captured: {
            type: 'boolean',
            label: 'Change button captured',
            description: 'Foreground and background colors when image is being captured',
            options: [
                {
                    type: 'dropdown',
                    label: 'Source',
                    id: 'Key',
                    default: 'Capture1',
                    choices: choices.getChoicesForCapture()
                }
            ],
            style: {
                color: self.rgb(255, 255, 255),
                bgcolor: self.rgb(255, 255, 0)
            },
            callback: function (feedback) {
                return self.captureStates[feedback.options.Key];
            }
        },
        slot_displayed: {
            type: 'boolean',
            label: 'Presentation displayed',
            description: 'Foreground and background colors when presentation is displayed',
            options: [
                {
                    type: 'dropdown',
                    label: 'Slot',
                    id: 'Key',
                    default: 'Slot1',
                    choices: choices.getChoicesForSlot()
                }
            ],
            style: {
                color: self.rgb(255, 255, 255),
                bgcolor: self.rgb(255, 0, 0)
            },
            callback: function (feedback) {
                return self.slotStates[feedback.options.Key].opened;
            }
        },
        slot_exist: {
            type: 'boolean',
            label: 'Presentation if exists',
            description: 'Foreground and background colors when presentation exists',
            options: [
                {
                    type: 'dropdown',
                    label: 'Slot',
                    id: 'Key',
                    default: 'Slot1',
                    choices: choices.getChoicesForSlot()
                }
            ],
            style: {
                color: self.rgb(255, 255, 255),
                bgcolor: self.rgb(204, 204, 0)
            },
            callback: function (feedback) {
                return self.slotStates[feedback.options.Key].exists;
            }
        }
	}
}