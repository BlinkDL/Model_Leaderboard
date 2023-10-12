import { useMemo } from "react";
import { MantineReactTable, type MRT_ColumnDef } from "mantine-react-table";
import { Title } from "@mantine/core";
import LargeModelEvalData from "../lm_eval.json";
import { langMap, modelInfo, tableMap } from "./constant";
import { calcRenderNumer } from "./utils";

const evalData = Object.keys(LargeModelEvalData).map((item: string) => {
  const values = (LargeModelEvalData as any)[item] || {};
  const keys = Object.keys(values);
  // xstory_cloze_* acc
  let xscAacAvg = 0;
  let xscItemCount = 0;
  // lambada_openai_mt_* ppl and acc
  let xlbPplAvg = 0;
  let xlbPplCount = 0;
  let xlbAacAvg = 0;
  let xlbAacCount = 0;
  // xwinograd_*
  let xwgAacAvg = 0;
  let xwgAacCount = 0;
  // xcopa_*
  let xcopaAacAvg = 0;
  let xcopaAacCount = 0;
  keys.forEach((item) => {
    if (item.includes("xstory_cloze_")) {
      xscAacAvg += values[item];
      xscItemCount += 1;
    }

    if (item.includes("lambada_openai_mt_") && item.includes("ppl")) {
      xlbPplAvg += values[item];
      xlbPplCount += 1;
    }

    if (item.includes("lambada_openai_mt_") && item.includes("acc")) {
      xlbAacAvg += values[item];
      xlbAacCount += 1;
    }

    if (item.includes("xwinograd_") && item.includes("acc")) {
      xwgAacAvg += values[item];
      xwgAacCount += 1;
    }

    if (item.includes("xcopa_") && item.includes("acc")) {
      xcopaAacAvg += values[item];
      xcopaAacCount += 1;
    }
  });

  return {
    modelName: item,
    modelSize: modelInfo[item] || '-',
    ...values,
    "xstory_cloze_%avg": xscAacAvg / xscItemCount,
    "lambada_openai_mt_%avg": xlbAacAvg / xlbAacCount,
    "xwinograd_%avg": xwgAacAvg / xwgAacCount,
    "xcopa_%avg": xcopaAacAvg / xcopaAacCount,
  };
});

const mainTableMap: any[] = [];
tableMap.forEach((item) => {
  if (item.sub?.length) {
    item.sub.forEach((subItem) => {
      const showLabel = langMap[subItem]
        ? `${langMap[subItem]}(${subItem})`
        : subItem;
      mainTableMap.push({
        value: item.value + subItem,
        label: showLabel,
      });
    });
  } else {
    mainTableMap.push(item);
  }
});

const renderColumns = tableMap.map((item) => {
  if (item.value === 'model') {
    return {
      id: item.value,
      header: item.label,
      // size: 100,
      columns: item.sub.map((subItem) => {
        const accessKey = item.value + subItem;
        if (subItem === 'Size') {
          return {
            accessorKey: accessKey,
            header: subItem,
            size: 50,
            enableColumnActions: false,
          }
        }
        return {
          accessorKey: accessKey,
          size: 50,
          header: subItem,
          enableColumnActions: false,
          Cell: (cellItem: any) => {
            const { cell } = cellItem;
            const value = cell.getValue();
            return <div style={{
              maxWidth: '10rem',
            }}>{value}</div>
          }
        }
      }),
    };
  }
  return {
    id: item.value,
    header: item.label,
    // size: item.sub.length * 50,
    columns: item.sub.map((subItem) => {
      const accessKey = item.value + subItem;
      return {
        accessorKey: accessKey,
        header: subItem,
        size: 50,
        enableColumnActions: false,
        Cell: (cellItem: any) => {
          const { cell } = cellItem;
          return calcRenderNumer(cell.getValue())
        }
      }
    }),
  };
})

const LLMBoard = () => {
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => renderColumns,
    []
  );

  return (
    <MantineReactTable
      columns={columns}
      data={evalData}
      enablePagination={false}
      enableTableFooter={false}
      enableBottomToolbar={false}
      enableColumnOrdering
      mantineTableProps= {{
        withColumnBorders: true,
      }}
      mantineTableContainerProps={{
        sx: { maxHeight: `${window.innerHeight - 70}px` }
      }}
      mantineSearchTextInputProps={{
        placeholder: "Search Table",
        sx: { minWidth: "18rem" },
        variant: "filled",
      }}
      renderTopToolbarCustomActions={() => {
        return (
          <Title
            style={{
              fontSize: "1.5rem",
            }}
          >
            RWKV
          </Title>
        );
      }}
      enableStickyFooter={true}
      enableStickyHeader={true}
      initialState={{
        density: "xs",
        columnPinning: { left: ['modelSize', 'modelName', 'model'], right: [] },
        pagination: {
          pageIndex: 0,
          pageSize: 1000,
        },
        sorting: [{
          id: 'lambada_openai/ppl',
          desc: false,
        }],
        showGlobalFilter: true,
      }}
    />
  );
};

export default LLMBoard;
