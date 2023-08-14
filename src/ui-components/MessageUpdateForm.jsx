/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Message } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MessageUpdateForm(props) {
  const {
    id: idProp,
    message: messageModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    message: "",
    createdOn: "",
    messageType: "",
    messageStatus: "",
  };
  const [message, setMessage] = React.useState(initialValues.message);
  const [createdOn, setCreatedOn] = React.useState(initialValues.createdOn);
  const [messageType, setMessageType] = React.useState(
    initialValues.messageType
  );
  const [messageStatus, setMessageStatus] = React.useState(
    initialValues.messageStatus
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = messageRecord
      ? { ...initialValues, ...messageRecord }
      : initialValues;
    setMessage(cleanValues.message);
    setCreatedOn(cleanValues.createdOn);
    setMessageType(cleanValues.messageType);
    setMessageStatus(cleanValues.messageStatus);
    setErrors({});
  };
  const [messageRecord, setMessageRecord] = React.useState(messageModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Message, idProp)
        : messageModelProp;
      setMessageRecord(record);
    };
    queryData();
  }, [idProp, messageModelProp]);
  React.useEffect(resetStateValues, [messageRecord]);
  const validations = {
    message: [],
    createdOn: [],
    messageType: [],
    messageStatus: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertTimeStampToDate = (ts) => {
    if (Math.abs(Date.now() - ts) < Math.abs(Date.now() - ts * 1000)) {
      return new Date(ts);
    }
    return new Date(ts * 1000);
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          message,
          createdOn,
          messageType,
          messageStatus,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Message.copyOf(messageRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MessageUpdateForm")}
      {...rest}
    >
      <TextField
        label="Message"
        isRequired={false}
        isReadOnly={false}
        value={message}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              message: value,
              createdOn,
              messageType,
              messageStatus,
            };
            const result = onChange(modelFields);
            value = result?.message ?? value;
          }
          if (errors.message?.hasError) {
            runValidationTasks("message", value);
          }
          setMessage(value);
        }}
        onBlur={() => runValidationTasks("message", message)}
        errorMessage={errors.message?.errorMessage}
        hasError={errors.message?.hasError}
        {...getOverrideProps(overrides, "message")}
      ></TextField>
      <TextField
        label="Created on"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdOn && convertToLocal(convertTimeStampToDate(createdOn))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              message,
              createdOn: value,
              messageType,
              messageStatus,
            };
            const result = onChange(modelFields);
            value = result?.createdOn ?? value;
          }
          if (errors.createdOn?.hasError) {
            runValidationTasks("createdOn", value);
          }
          setCreatedOn(value);
        }}
        onBlur={() => runValidationTasks("createdOn", createdOn)}
        errorMessage={errors.createdOn?.errorMessage}
        hasError={errors.createdOn?.hasError}
        {...getOverrideProps(overrides, "createdOn")}
      ></TextField>
      <SelectField
        label="Message type"
        placeholder="Please select an option"
        isDisabled={false}
        value={messageType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              message,
              createdOn,
              messageType: value,
              messageStatus,
            };
            const result = onChange(modelFields);
            value = result?.messageType ?? value;
          }
          if (errors.messageType?.hasError) {
            runValidationTasks("messageType", value);
          }
          setMessageType(value);
        }}
        onBlur={() => runValidationTasks("messageType", messageType)}
        errorMessage={errors.messageType?.errorMessage}
        hasError={errors.messageType?.hasError}
        {...getOverrideProps(overrides, "messageType")}
      >
        <option
          children="Text"
          value="TEXT"
          {...getOverrideProps(overrides, "messageTypeoption0")}
        ></option>
        <option
          children="Video"
          value="VIDEO"
          {...getOverrideProps(overrides, "messageTypeoption1")}
        ></option>
        <option
          children="Audio"
          value="AUDIO"
          {...getOverrideProps(overrides, "messageTypeoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Message status"
        placeholder="Please select an option"
        isDisabled={false}
        value={messageStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              message,
              createdOn,
              messageType,
              messageStatus: value,
            };
            const result = onChange(modelFields);
            value = result?.messageStatus ?? value;
          }
          if (errors.messageStatus?.hasError) {
            runValidationTasks("messageStatus", value);
          }
          setMessageStatus(value);
        }}
        onBlur={() => runValidationTasks("messageStatus", messageStatus)}
        errorMessage={errors.messageStatus?.errorMessage}
        hasError={errors.messageStatus?.hasError}
        {...getOverrideProps(overrides, "messageStatus")}
      >
        <option
          children="Sent"
          value="SENT"
          {...getOverrideProps(overrides, "messageStatusoption0")}
        ></option>
        <option
          children="Received"
          value="RECEIVED"
          {...getOverrideProps(overrides, "messageStatusoption1")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || messageModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || messageModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
