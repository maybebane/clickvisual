import classNames from "classnames";
import logItemStyles from "@/pages/DataLogs/components/RawLogList/LogItem/index.less";
import { useModel } from "@@/plugin-model/useModel";
import JsonView from "@/components/JsonView";
import JsonStringValue from "@/components/JsonView/JsonStringValue";

type LogContentParseProps = {
  logContent: any;
  quickInsertLikeQuery: (key: string) => void;
};

const LogContentParse = ({
  logContent,
  quickInsertLikeQuery,
}: LogContentParseProps) => {
  const { highlightKeywords } = useModel("dataLogs");

  const isNullList = ["\n", "\r\n", "", " "];

  let content;
  if (typeof logContent !== "object") {
    if (isNullList.includes(logContent)) {
      content = "";
    } else {
      content = (
        <JsonStringValue
          val={logContent.toString()}
          onClickValue={quickInsertLikeQuery}
          highLightValue={highlightKeywords}
        />
      );
    }
  } else if (logContent === null) {
    content = "";
  } else {
    content = (
      <>
        <JsonView
          data={logContent}
          onClickValue={quickInsertLikeQuery}
          highLightValue={highlightKeywords}
        />
      </>
    );
  }
  return (
    <span className={classNames(logItemStyles.logContent)}>{content}</span>
  );
};
export default LogContentParse;
