import { CSSProperties, useCallback, useRef, useState } from "react";
import { FixedSizeGrid as Grid, GridOnItemsRenderedProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import SingleProductCard from "../SingleProductCard";
import useCheckMobileScreen from "../../utils/hook/check-screen.hook.ts";
import {
  ProductsResponse,
  ProductType,
} from "../../utils/type/product.type.ts";
import { ProductService } from "../../api/product.api.ts";

export default function InfiniteScroll(props: ProductsResponse) {
  const isMobile = useCheckMobileScreen();
  const [gridSize] = useState(() => {
    if (isMobile) {
      return {
        rows: 2,
        cols: 2,
      };
    } else {
      return {
        rows: 2,
        cols: 4,
      };
    }
  });

  const [data, setData] = useState<ProductType[]>(() => props.products);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const listRef = useRef<Grid>(null);

  const scrollToTop = () => {
    if (listRef.current) {
      listRef.current.scrollToItem({
        columnIndex: 0,
        rowIndex: 0,
        align: "center",
      });
    }
  };

  const fetchData = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(() => true);

    const responseProduct = await ProductService.getProductList({
      skip: index * 10,
    });

    const total = responseProduct.total ?? 0;

    setHasMore(() => data.length <= total - 1);
    setData((prevItems) => {
      return [...prevItems, ...responseProduct.products];
    });
    setIndex((prevIndex) => prevIndex + 2);
    setIsLoading(() => false);
  }, [index, isLoading]);

  const handleScroll = (sumOffset: number) => {
    if (sumOffset + 1 >= index * 10 && hasMore) {
      fetchData();
    }
  };

  const onItemsRendered = (params: GridOnItemsRenderedProps) => {
    let sumOffset = 0;

    if (isMobile) {
      sumOffset =
        params.visibleRowStopIndex +
        params.overscanRowStopIndex +
        params.visibleColumnStopIndex;
    } else {
      sumOffset = Object.keys(params).reduce((acc, key) => {
        return acc + params[key as never];
      }, 0);
    }

    handleScroll(sumOffset);
  };

  const Cell = ({
    columnIndex,
    rowIndex,
    style,
  }: {
    columnIndex: number;
    rowIndex: number;
    style: CSSProperties;
  }) => (
    <div style={style}>
      <div className="px-2">
        <SingleProductCard
          key={columnIndex}
          {...data[rowIndex * gridSize.cols + columnIndex]}
        />
      </div>
    </div>
  );

  return (
    <div className="flex w-full h-full">
      <AutoSizer>
        {({ height, width }) => (
          <Grid
            ref={listRef}
            columnCount={gridSize.cols}
            columnWidth={width / gridSize.cols}
            height={height}
            rowCount={data.length / gridSize.cols}
            rowHeight={height / gridSize.rows}
            width={width}
            onItemsRendered={onItemsRendered}
          >
            {Cell}
          </Grid>
        )}
      </AutoSizer>
      <button onClick={scrollToTop} className="button-scroll-top">
        TOP
      </button>
    </div>
  );
}
