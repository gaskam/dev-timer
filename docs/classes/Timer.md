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
- [formatTime](Timer.md#formattime-1)
- [toMs](Timer.md#toms-1)

## Constructors

### constructor

• **new Timer**(`duration`)

Create a new Timer with a duration

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | The duration of the timer, in ms |

#### Defined in

[Timer.ts:146](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L146)

## Properties

### #currentTimeout

• `Private` **#currentTimeout**: `number` = `-1`

#### Defined in

[Timer.ts:20](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L20)

___

### #specialEvents

• `Private` **#specialEvents**: `_specialEvents`

#### Defined in

[Timer.ts:23](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L23)

___

### \_timeline

• **\_timeline**: [`number`, `number`][] = `[]`

#### Defined in

[Timer.ts:19](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L19)

___

### beginTime

• **beginTime**: `number` = `null`

#### Defined in

[Timer.ts:14](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L14)

___

### callbacks

• **callbacks**: `event`[] = `[]`

#### Defined in

[Timer.ts:18](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L18)

___

### duration

• **duration**: `number`

#### Defined in

[Timer.ts:21](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L21)

___

### pauseAmount

• **pauseAmount**: `number` = `0`

#### Defined in

[Timer.ts:15](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L15)

___

### pauseBegin

• **pauseBegin**: `number` = `null`

#### Defined in

[Timer.ts:16](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L16)

___

### paused

• **paused**: `boolean` = `true`

#### Defined in

[Timer.ts:17](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L17)

## Accessors

### ended

• `get` **ended**(): `boolean`

#### Returns

`boolean`

#### Defined in

[Timer.ts:201](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L201)

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

[Timer.ts:276](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L276)

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

[Timer.ts:283](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L283)

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

[Timer.ts:262](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L262)

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

[Timer.ts:269](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L269)

___

### runningTime

• `get` **runningTime**(): `number`

Gives the current running time of the timer

#### Returns

`number`

#### Defined in

[Timer.ts:189](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L189)

___

### timeLeft

• `get` **timeLeft**(): `number`

Gives the current time left of the timer

#### Returns

`number`

#### Defined in

[Timer.ts:197](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L197)

## Methods

### #registerAllEvents

▸ `Private` **#registerAllEvents**(): `void`

#### Returns

`void`

#### Defined in

[Timer.ts:391](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L391)

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

[Timer.ts:368](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L368)

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

[Timer.ts:355](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L355)

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

[Timer.ts:382](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L382)

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

[Timer.ts:164](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L164)

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

[Timer.ts:321](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L321)

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

[Timer.ts:181](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L181)

___

### checkEvents

▸ **checkEvents**(): `void`

#### Returns

`void`

#### Defined in

[Timer.ts:399](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L399)

___

### destroyAllSpecialEvents

▸ **destroyAllSpecialEvents**(): `void`

Destroys all the callbacks of all the special events

#### Returns

`void`

#### Defined in

[Timer.ts:306](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L306)

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

[Timer.ts:299](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L299)

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

[Timer.ts:341](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L341)

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

[Timer.ts:291](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L291)

___

### formatTime

▸ **formatTime**(`time`, `format?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |
| `format?` | `string` |

#### Returns

`string`

#### Defined in

[Timer.ts:98](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L98)

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

[Timer.ts:331](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L331)

___

### reset

▸ **reset**(): `void`

Resets the timer to its initial state but keeps the events.
If you want to reset completely, just create a new timer.
Trigger the onReset event.

#### Returns

`void`

#### Defined in

[Timer.ts:249](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L249)

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

[Timer.ts:156](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L156)

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

[Timer.ts:172](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L172)

___

### start

▸ **start**(): `boolean`

Starts the timer.
Triggers the onStart event.

#### Returns

`boolean`

Returns true if the timer was paused, false if not

#### Defined in

[Timer.ts:210](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L210)

___

### stop

▸ **stop**(): `boolean`

Stops/pauses the timer.
Triggers the onStop event.

#### Returns

`boolean`

Returns true if the timer was running, false if not

#### Defined in

[Timer.ts:232](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L232)

___

### timerEndRoutine

▸ **timerEndRoutine**(): `void`

#### Returns

`void`

#### Defined in

[Timer.ts:419](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L419)

___

### toMs

▸ **toMs**(`time`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `string` \| `number` |

#### Returns

`number`

#### Defined in

[Timer.ts:137](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L137)

___

### formatTime

▸ `Static` **formatTime**(`time`, `format?`): `string`

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

[Timer.ts:38](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L38)

___

### toMs

▸ `Static` **toMs**(`time`): `number`

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

[Timer.ts:109](https://github.com/BOT-maKeR-0000/timer-ts/blob/2a85757/src/Timer.ts#L109)
