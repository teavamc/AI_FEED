package com.ruoyi.service.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.service.mapper.PigstyinfoMapper;
import com.ruoyi.service.domain.Pigstyinfo;
import com.ruoyi.service.service.IPigstyinfoService;
import com.ruoyi.common.core.text.Convert;

/**
 * 传感器数据 服务层实现
 * 
 * @author å± é¡
 * @date 2019-04-09
 */
@Service
public class PigstyinfoServiceImpl implements IPigstyinfoService 
{
	@Autowired
	private PigstyinfoMapper pigstyinfoMapper;

	/**
     * 查询传感器数据信息
     * 
     * @param id 传感器数据ID
     * @return 传感器数据信息
     */
    @Override
	public Pigstyinfo selectPigstyinfoById(Integer id)
	{
	    return pigstyinfoMapper.selectPigstyinfoById(id);
	}
	
	/**
     * 查询传感器数据列表
     * 
     * @param pigstyinfo 传感器数据信息
     * @return 传感器数据集合
     */
	@Override
	public List<Pigstyinfo> selectPigstyinfoList(Pigstyinfo pigstyinfo)
	{
	    return pigstyinfoMapper.selectPigstyinfoList(pigstyinfo);
	}
	
    /**
     * 新增传感器数据
     * 
     * @param pigstyinfo 传感器数据信息
     * @return 结果
     */
	@Override
	public int insertPigstyinfo(Pigstyinfo pigstyinfo)
	{
	    return pigstyinfoMapper.insertPigstyinfo(pigstyinfo);
	}
	
	/**
     * 修改传感器数据
     * 
     * @param pigstyinfo 传感器数据信息
     * @return 结果
     */
	@Override
	public int updatePigstyinfo(Pigstyinfo pigstyinfo)
	{
	    return pigstyinfoMapper.updatePigstyinfo(pigstyinfo);
	}

	/**
     * 删除传感器数据对象
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
	@Override
	public int deletePigstyinfoByIds(String ids)
	{
		return pigstyinfoMapper.deletePigstyinfoByIds(Convert.toStrArray(ids));
	}
	
}
