package com.ruoyi.service.service;

import com.ruoyi.service.domain.Pigstyinfo;
import java.util.List;

/**
 * 传感器数据 服务层
 * 
 * @author å± é¡
 * @date 2019-04-09
 */
public interface IPigstyinfoService 
{
	/**
     * 查询传感器数据信息
     * 
     * @param id 传感器数据ID
     * @return 传感器数据信息
     */
	public Pigstyinfo selectPigstyinfoById(Integer id);
	
	/**
     * 查询传感器数据列表
     * 
     * @param pigstyinfo 传感器数据信息
     * @return 传感器数据集合
     */
	public List<Pigstyinfo> selectPigstyinfoList(Pigstyinfo pigstyinfo);
	
	/**
     * 新增传感器数据
     * 
     * @param pigstyinfo 传感器数据信息
     * @return 结果
     */
	public int insertPigstyinfo(Pigstyinfo pigstyinfo);
	
	/**
     * 修改传感器数据
     * 
     * @param pigstyinfo 传感器数据信息
     * @return 结果
     */
	public int updatePigstyinfo(Pigstyinfo pigstyinfo);
		
	/**
     * 删除传感器数据信息
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
	public int deletePigstyinfoByIds(String ids);
	
}
