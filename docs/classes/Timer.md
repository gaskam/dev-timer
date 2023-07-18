[dev-timer](../README.md) / [Exports](../modules.md) / Timer

# Class: Timer

## Table of contents

### Constructors

- [constructor](Timer.md#constructor)

### Properties

- [#currentTimeout](Timer.md##currenttimeout)
- [#specialEvents](Timer.md##specialevents)
- [\_timeline](Timer.md#_timeline)
- [beginTime](Timer.md#begintime)
- [callbacks](Timer.md#callbacks)
- [duration](Timer.md#duration)
- [pauseAmount](Timer.md#pauseamount)
- [pauseBegin](Timer.md#pausebegin)
- [paused](Timer.md#paused)

### Accessors

- [ended](Timer.md#ended)
- [onEnd](Timer.md#onend)
- [onReset](Timer.md#onreset)
- [onStart](Timer.md#onstart)
- [onStop](Timer.md#onstop)
- [runningTime](Timer.md#runningtime)
- [timeLeft](Timer.md#timeleft)

### Methods

- [#registerAllEvents](Timer.md##registerallevents)
- [#registerEvent](Timer.md##registerevent)
- [#timelineInsert](Timer.md##timelineinsert)
- [#unregisterEvent](Timer.md##unregisterevent)
- [addDuration](Timer.md#addduration)
- [addEventListener](Timer.md#addeventlistener)
- [addRunningTime](Timer.md#addrunningtime)
- [checkEvents](Timer.md#checkevents)
- [destroyAllSpecialEvents](Timer.md#destroyallspecialevents)
- [destroySpecialEvent](Timer.md#destroyspecialevent)
- [dispatchEvent](Timer.md#dispatchevent)
- [dispatchSpecialEvent](Timer.md#dispatchspecialevent)
- [formatTime](Timer.md#formattime)
- [removeEventListener](Timer.md#removeeventlistener)
- [reset](Timer.md#reset)
- [setDuration](Timer.md#setduration)
- [setRunningTime](Timer.md#setrunningtime)
- [start](Timer.md#start)
- [stop](Timer.md#stop)
- [timerEndRoutine](Timer.md#timerendroutine)
- [toMs](Timer.md#toms)

## Constructors

### constructor

• **new Timer**(`duration`)

Create a new Timer with a duration

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | The duration of the timer, in ms |

#### Defined in

[Timer.ts:142](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L142)

## Properties

### #currentTimeout

• `Private` **#currentTimeout**: `number` = `-1`

#### Defined in

[Timer.ts:25](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L25)

___

### #specialEvents

• `Private` **#specialEvents**: `_specialEvents`

#### Defined in

[Timer.ts:28](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L28)

___

### \_timeline

• **\_timeline**: [`number`, `number`][] = `[]`

#### Defined in

[Timer.ts:24](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L24)

___

### beginTime

• **beginTime**: `number` = `null`

#### Defined in

[Timer.ts:19](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L19)

___

### callbacks

• **callbacks**: `event`[] = `[]`

#### Defined in

[Timer.ts:23](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L23)

___

### duration

• **duration**: `number`

#### Defined in

[Timer.ts:26](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L26)

___

### pauseAmount

• **pauseAmount**: `number` = `0`

#### Defined in

[Timer.ts:20](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L20)

___

### pauseBegin

• **pauseBegin**: `number` = `null`

#### Defined in

[Timer.ts:21](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L21)

___

### paused

• **paused**: `boolean` = `true`

#### Defined in

[Timer.ts:22](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L22)

## Accessors

### ended

• `get` **ended**(): `boolean`

#### Returns

`boolean`

#### Defined in

[Timer.ts:197](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L197)

___

### onEnd

• `set` **onEnd**(`callback`): `void`

Add a callback to the onReset event, you may add multiple ones

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[Timer.ts:272](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L272)

___

### onReset

• `set` **onReset**(`callback`): `void`

Add a callback to the onReset event, you may add multiple ones

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[Timer.ts:279](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L279)

___

### onStart

• `set` **onStart**(`callback`): `void`

Add a callback to the onStart event, you may add multiple ones

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[Timer.ts:258](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L258)

___

### onStop

• `set` **onStop**(`callback`): `void`

Add a callback to the onStop event, you may add multiple ones

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

#### Returns

`void`

#### Defined in

[Timer.ts:265](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L265)

___

### runningTime

• `get` **runningTime**(): `number`

Gives the current running time of the timer

#### Returns

`number`

#### Defined in

[Timer.ts:185](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L185)

___

### timeLeft

• `get` **timeLeft**(): `number`

Gives the current time left of the timer

#### Returns

`number`

#### Defined in

[Timer.ts:193](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L193)

## Methods

### #registerAllEvents

▸ `Private` **#registerAllEvents**(): `void`

#### Returns

`void`

#### Defined in

[Timer.ts:387](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L387)

___

### #registerEvent

▸ `Private` **#registerEvent**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `number` \| `number`[] |

#### Returns

`boolean`

#### Defined in

[Timer.ts:364](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L364)

___

### #timelineInsert

▸ `Private` **#timelineInsert**(`date`, `name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `number` |
| `name` | `number` |

#### Returns

`void`

#### Defined in

[Timer.ts:351](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L351)

___

### #unregisterEvent

▸ `Private` **#unregisterEvent**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `number` \| `number`[] |

#### Returns

`boolean`

#### Defined in

[Timer.ts:378](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L378)

___

### addDuration

▸ **addDuration**(`duration`): `void`

Add a duration to the timer duration, or removes it if the duration is negative

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | The duration to add to the timer, in ms |

#### Returns

`void`

#### Defined in

[Timer.ts:160](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L160)

___

### addEventListener

▸ **addEventListener**(`event`, `callback`): `void`

Add an event listener, to trigger at a specific interval of time

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `number` | The interval of time the event should be triggered at |
| `callback` | `Function` | The callback to trigger |

#### Returns

`void`

#### Defined in

[Timer.ts:317](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L317)

___

### addRunningTime

▸ **addRunningTime**(`duration`): `void`

Add a duration to the running time of the timer, or removes it if the provided duration is negative

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | The duration to add to the running time of the timer, in ms |

#### Returns

`void`

#### Defined in

[Timer.ts:177](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L177)

___

### checkEvents

▸ **checkEvents**(): `void`

#### Returns

`void`

#### Defined in

[Timer.ts:395](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L395)

___

### destroyAllSpecialEvents

▸ **destroyAllSpecialEvents**(): `void`

Destroys all the callbacks of all the special events

#### Returns

`void`

#### Defined in

[Timer.ts:302](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L302)

___

### destroySpecialEvent

▸ **destroySpecialEvent**(`event`): `void`

Destroys all the callbacks of a special event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"stop"`` \| ``"end"`` \| ``"start"`` \| ``"reset"`` | The event type to destroy |

#### Returns

`void`

#### Defined in

[Timer.ts:295](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L295)

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `number`

Triggers all the callbacks of a specific time interval

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `number` | The interval of the callbacks to trigger |

#### Returns

`number`

The amount of callbacks triggered

#### Defined in

[Timer.ts:337](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L337)

___

### dispatchSpecialEvent

▸ **dispatchSpecialEvent**(`event`): `void`

Dispatches one of the special events

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | ``"stop"`` \| ``"end"`` \| ``"start"`` \| ``"reset"`` | The event to dispatch |

#### Returns

`void`

#### Defined in

[Timer.ts:287](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L287)

___

### formatTime

▸ **formatTime**(`time`, `format?`): `string`

Function to help you format time

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `number` | A time in ms |
| `format?` | `string` | The format, accepted formats are: 'ms', 'ss', 'mm', 'hh', 'dd', 'ww', 'mo', 'yy', 'yyyy', and you may use multiple formats at once, for example: 'hh:mm:ss' |

#### Returns

`string`

The formatted time

#### Defined in

[Timer.ts:43](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L43)

___

### removeEventListener

▸ **removeEventListener**(`event`): `void`

Removes all the callbacks of a specific time interval

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `number` | The event to remove |

#### Returns

`void`

#### Defined in

[Timer.ts:327](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L327)

___

### reset

▸ **reset**(): `void`

Resets the timer to its initial state but keeps the events.
If you want to reset completely, just create a new timer.
Trigger the onReset event.

#### Returns

`void`

#### Defined in

[Timer.ts:245](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L245)

___

### setDuration

▸ **setDuration**(`duration`): `void`

Set the duration of the timer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | The duration of the timer, in ms |

#### Returns

`void`

#### Defined in

[Timer.ts:152](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L152)

___

### setRunningTime

▸ **setRunningTime**(`duration`): `void`

Sets the running time of the timer(overrides the current running time)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | The new running time of the timer |

#### Returns

`void`

#### Defined in

[Timer.ts:168](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L168)

___

### start

▸ **start**(): `boolean`

Starts the timer.
Triggers the onStart event.

#### Returns

`boolean`

Returns true if the timer was paused, false if not

#### Defined in

[Timer.ts:206](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L206)

___

### stop

▸ **stop**(): `boolean`

Stops/pauses the timer.
Triggers the onStop event.

#### Returns

`boolean`

Returns true if the timer was running, false if not

#### Defined in

[Timer.ts:228](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L228)

___

### timerEndRoutine

▸ **timerEndRoutine**(): `void`

#### Returns

`void`

#### Defined in

[Timer.ts:415](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L415)

___

### toMs

▸ **toMs**(`time`): `number`

Ensures that the time is in ms, and if not, converts it to ms

**`Throws`**

If the time string is not in the correct format

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time` | `string` \| `number` | The time to convert, if string, it must be in the format: 'number + unit', ex: '1s', '1m', '1h', '1d', '1w', '1mo', '1y' |

#### Returns

`number`

The time converted to ms

#### Defined in

[Timer.ts:109](https://github.com/BOT-maKeR-0000/timer-ts/blob/9ebcb74/src/Timer.ts#L109)
