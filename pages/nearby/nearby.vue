<template>
	<view class="wrapper">
		<van-notify id="van-notify" />
		<view class="loading_wrapper" v-show="loading"><van-loading vertical type="spinner">加载中...</van-loading></view>
		<view class="goods_wrapper">
			<view class="goods_item" v-for="(item, index) in carports" @click="onPreview(item)" :key="index">
				<view class="item_header">
					<text>{{ item.name }}</text>
					<text v-show="item.distance">{{ item.distance }} M</text>
				</view>
				<view class="item_body">
					<text>{{ item.address }}</text>
					<text>{{ item.price || "*" }} 元/时</text>
				</view>
				<view class="item_footer" @click.stop="onQueryRoute(item)"><image src="../../static/image/navigation.svg"></image></view>
			</view>
		</view>
	</view>
</template>

<script>
import { queryRoute } from "@/service/geo";
const uco_carport = uniCloud.importObject("carport");
export default {
	data() {
		return {
			start: 0,
			loading: true,
			carports: []
		};
	},
	async onLoad() {
		await this.getDataFromDB();
		this.rerender();
	},
	async onPullDownRefresh() {
		// this.start = 0;
		await this.getDataFromDB();
		this.rerender();
	},
	// onReachBottom() {
	// 	this.getDataFromDB();
	// },
	methods: {
		// 从数据库获取数据(TODO: 限制拉取条数)
		async getDataFromDB() {
			const { address, longitude, latitude } = uni.getStorageSync("_location");
			this.loading = true;
			// const result = await uco_carport.get(this.start, 10);
			const { code, data } = await uco_carport.getCarportOfSamePlace(address, { longitude, latitude });
			this.loading = false;
			if (code != 0) {
				this.$notify({ type: "danger", message: "获取数据失败!" });
				return;
			}
			this.carports = data;
			uni.stopPullDownRefresh();
		},
		// 根据页面数据量重新渲染页面(当数据条数为0时，将附近的标记点数据渲染到页面)
		rerender() {
			if (this.carports.length == 0) {
				const _shared_markers = uni.getStorageSync("_shared_markers");
				this.carports.push(..._shared_markers);
			}
		},
		// 前往详情预览页
		onPreview(item) {
			uni.navigateTo({
				url: `/subpages/preview?data=${JSON.stringify(item)}`
			});
		},
		// 查询路线
		onQueryRoute({name, longitude, latitude}) {
			queryRoute(name, longitude, latitude);
		}
	}
};
</script>

<style lang="scss" scoped>
.loading_wrapper {
	position: absolute;
	left: 50%;
	top: 30%;
	transform: translate(-50%, -50%);
	z-index: 999;
}
.goods_wrapper {
	.goods_item {
		position: relative;
		background-color: #ffffff;
		padding: 20rpx;
		border-radius: 10rpx;
		&:not(:last-child) {
			border-bottom: 1px solid #efefef;
		}
		.item_header {
			display: flex;
			justify-content: space-between;
			text {
				&:nth-child(1) {
					font-size: 34rpx;
					font-weight: bold;
				}
				&:nth-child(2) {
					color: $uni-text-color-grey;
					font-size: 30rpx;
				}
			}
		}
		.item_body {
			display: flex;
			flex-direction: column;
			font-size: 32rpx;
			text {
				&:nth-child(1) {
					padding: 8rpx 0;
					color: $uni-text-color-grey;
				}
				&:nth-child(2) {
					padding: 8rpx 0;
					color: red;
					font-size: 34rpx;
					font-weight: 600;
				}
			}
		}
		.item_footer {
			position: absolute;
			right: 20rpx;
			bottom: 20rpx;
			width: 84rpx;
			height: 84rpx;
			border-radius: 50%;
			z-index: 999;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
